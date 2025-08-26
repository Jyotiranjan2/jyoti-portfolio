import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.json({ success: true, message: "Message sent successfully!", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Get portfolio data
  app.get("/api/portfolio", async (req, res) => {
    res.json({
      name: "Jyoti Ranjan Barik",
      title: "Cybersecurity Enthusiast",
      description: "Aspiring cybersecurity analyst with expertise in threat detection, vulnerability assessment, and security operations. Certified enthusiast with hands-on experience in modern security frameworks.",
      stats: {
        certifications: "8+",
        projects: "3+",
        experience: "2+ Years"
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
