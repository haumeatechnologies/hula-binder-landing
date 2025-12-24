import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // TODO: Send email notification to arleen@haumeatechnologies.com
      // using Resend once the connector is set up
      
      res.status(201).json({
        success: true,
        data: contactRequest,
        message: "Demo request received successfully"
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromError(error);
        return res.status(400).json({
          success: false,
          error: validationError.toString()
        });
      }
      
      console.error("Error creating contact request:", error);
      res.status(500).json({
        success: false,
        error: "Failed to submit demo request"
      });
    }
  });

  return httpServer;
}
