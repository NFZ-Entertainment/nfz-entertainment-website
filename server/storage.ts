import { users, partnershipInquiries, type User, type InsertUser, type PartnershipInquiry, type InsertPartnershipInquiry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPartnershipInquiry(inquiry: InsertPartnershipInquiry): Promise<PartnershipInquiry>;
  getPartnershipInquiries(): Promise<PartnershipInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private partnershipInquiries: Map<number, PartnershipInquiry>;
  private currentUserId: number;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.partnershipInquiries = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPartnershipInquiry(insertInquiry: InsertPartnershipInquiry): Promise<PartnershipInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: PartnershipInquiry = {
      ...insertInquiry,
      id,
      company: insertInquiry.company || null,
      venueType: insertInquiry.venueType || null,
      createdAt: new Date(),
    };
    this.partnershipInquiries.set(id, inquiry);
    return inquiry;
  }

  async getPartnershipInquiries(): Promise<PartnershipInquiry[]> {
    return Array.from(this.partnershipInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
