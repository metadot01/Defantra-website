import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "../shared/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || "Not provided",
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      });

      // In a production environment, you would:
      // 1. Send an email notification to bharath@defantra.com
      // 2. Store the submission in a database
      // 3. Send an auto-reply to the customer
      
      // For now, we'll simulate email sending
      await sendEmail({
        to: "bharath@defantra.com",
        subject: `New Audit Request from ${validatedData.name}`,
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Company: ${validatedData.company || "Not provided"}

Message:
${validatedData.message}
        `,
      });

      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : "Failed to process contact form",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Simple email function - in production, use a service like SendGrid, AWS SES, or Postmark
async function sendEmail(options: {
  to: string;
  subject: string;
  text: string;
}) {
  // Log email for now - in production, integrate with email service
  console.log("\n--- EMAIL NOTIFICATION ---");
  console.log(`To: ${options.to}`);
  console.log(`Subject: ${options.subject}`);
  console.log(`Body:\n${options.text}`);
  console.log("--- END EMAIL ---\n");
  
  // Simulate async operation
  return Promise.resolve();
}
