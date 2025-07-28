import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPartnershipInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Partnership inquiry endpoint
  app.post("/api/partnership-inquiry", async (req, res) => {
    try {
      const validatedData = insertPartnershipInquirySchema.parse(req.body);
      const inquiry = await storage.createPartnershipInquiry(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Partnership inquiry submitted successfully",
        id: inquiry.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid input data", 
          errors: error.errors 
        });
      }
      
      console.error("Error creating partnership inquiry:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Get partnership inquiries (for admin purposes)
  app.get("/api/partnership-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getPartnershipInquiries();
      res.json({ success: true, data: inquiries });
    } catch (error) {
      console.error("Error fetching partnership inquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
