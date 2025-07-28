import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Globe, Rocket } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertPartnershipInquiry } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState<InsertPartnershipInquiry>({
    name: "",
    email: "",
    company: "",
    venueType: "",
    message: "",
  });

  const { toast } = useToast();

  const partnershipMutation = useMutation({
    mutationFn: async (data: InsertPartnershipInquiry) => {
      const response = await apiRequest("POST", "/api/partnership-inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your partnership inquiry! We will contact you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        venueType: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send partnership inquiry. Please try again.",
        variant: "destructive",
      });
      console.error("Partnership inquiry error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    partnershipMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertPartnershipInquiry, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-bold text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-neon-magenta neon-text">GET IN</span>{" "}
            <span className="text-white">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to step into the future? Let's discuss how NFZ can transform your venue.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="gradient-border max-w-2xl mx-auto"
        >
          <Card className="gradient-border-content bg-dark-card border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-neon-cyan font-semibold">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-dark-bg border-gray-600 text-white focus:border-neon-cyan mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-neon-cyan font-semibold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-dark-bg border-gray-600 text-white focus:border-neon-cyan mt-2"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-neon-cyan font-semibold">Company/Organization</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company || ""}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-dark-bg border-gray-600 text-white focus:border-neon-cyan mt-2"
                    placeholder="Your company or venue name"
                  />
                </div>

                <div>
                  <Label htmlFor="venueType" className="text-neon-cyan font-semibold">Venue Type</Label>
                  <Select value={formData.venueType || ""} onValueChange={(value) => handleInputChange("venueType", value)}>
                    <SelectTrigger className="bg-dark-bg border-gray-600 text-white focus:border-neon-cyan mt-2">
                      <SelectValue placeholder="Select venue type" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-bg border-gray-600">
                      <SelectItem value="zoo">Zoo</SelectItem>
                      <SelectItem value="aquarium">Aquarium</SelectItem>
                      <SelectItem value="stadium">Stadium</SelectItem>
                      <SelectItem value="mall">Shopping Mall</SelectItem>
                      <SelectItem value="fair">Fair/Carnival</SelectItem>
                      <SelectItem value="entertainment">Entertainment Center</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-neon-cyan font-semibold">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={5}
                    className="bg-dark-bg border-gray-600 text-white focus:border-neon-cyan resize-none mt-2"
                    placeholder="Tell us about your venue and partnership interests..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    disabled={partnershipMutation.isPending}
                    className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-black px-8 py-4 text-lg font-bold hover:scale-105 transition-all duration-300"
                    style={{ background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta))' }}
                  >
                    {partnershipMutation.isPending ? "Sending..." : "Send Partnership Inquiry"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <Mail className="text-neon-cyan text-2xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-300">partnerships@nfz.world</p>
          </div>
          <div>
            <Globe className="text-neon-magenta text-2xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Website</h3>
            <p className="text-gray-300">www.nfz.world</p>
          </div>
          <div>
            <Rocket className="text-neon-purple text-2xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Backed By</h3>
            <p className="text-gray-300">FasterCapital</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
