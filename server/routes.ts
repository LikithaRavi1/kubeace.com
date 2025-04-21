import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { servicesData, solutionsData, caseStudiesData, testimonialsData, blogPostsData } from "./data/content";
import { sendContactEmail, isValidEmail } from "./services/emailService";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for KubeAce website
  const apiRoute = "/api";
  
  // Implement WWW/non-WWW redirect middleware
  app.use((req, res, next) => {
    const host = req.header('host');
    
    // Skip for localhost and development
    if (!host || host.includes('localhost') || host.includes('127.0.0.1') || host.includes('.replit.app')) {
      return next();
    }
    
    // Redirect www to non-www (or you could do the opposite)
    if (host.startsWith('www.')) {
      const newHost = host.slice(4); // Remove 'www.'
      return res.redirect(301, `${req.protocol}://${newHost}${req.originalUrl}`);
    }
    
    next();
  });
  
  // Enable GZIP compression middleware
  
  // SEO-related routes
  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.resolve('./client/public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send('Sitemap not found');
    }
  });
  
  app.get('/robots.txt', (req, res) => {
    const robotsPath = path.resolve('./client/public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      res.sendFile(robotsPath);
    } else {
      res.status(404).send('Robots.txt not found');
    }
  });

  // Get all services
  app.get(`${apiRoute}/services`, async (req, res) => {
    try {
      res.json(servicesData);
    } catch (error) {
      res.status(500).json({ message: "Error fetching services" });
    }
  });

  // Get service by slug
  app.get(`${apiRoute}/services/:slug`, async (req, res) => {
    try {
      const service = servicesData.find(s => s.slug === req.params.slug);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ message: "Error fetching service" });
    }
  });

  // Get all solutions
  app.get(`${apiRoute}/solutions`, async (req, res) => {
    try {
      res.json(solutionsData);
    } catch (error) {
      res.status(500).json({ message: "Error fetching solutions" });
    }
  });

  // Get solution by slug
  app.get(`${apiRoute}/solutions/:slug`, async (req, res) => {
    try {
      const solution = solutionsData.find(s => s.slug === req.params.slug);
      if (!solution) {
        return res.status(404).json({ message: "Solution not found" });
      }
      res.json(solution);
    } catch (error) {
      res.status(500).json({ message: "Error fetching solution" });
    }
  });

  // Get all case studies
  app.get(`${apiRoute}/case-studies`, async (req, res) => {
    try {
      res.json(caseStudiesData);
    } catch (error) {
      res.status(500).json({ message: "Error fetching case studies" });
    }
  });

  // Get case study by slug
  app.get(`${apiRoute}/case-studies/:slug`, async (req, res) => {
    try {
      const caseStudy = caseStudiesData.find(cs => cs.slug === req.params.slug);
      if (!caseStudy) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json(caseStudy);
    } catch (error) {
      res.status(500).json({ message: "Error fetching case study" });
    }
  });

  // Get all testimonials
  app.get(`${apiRoute}/testimonials`, async (req, res) => {
    try {
      res.json(testimonialsData);
    } catch (error) {
      res.status(500).json({ message: "Error fetching testimonials" });
    }
  });

  // Get all blog posts
  app.get(`${apiRoute}/blog-posts`, async (req, res) => {
    try {
      res.json(blogPostsData);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });

  // Get blog post by slug
  app.get(`${apiRoute}/blog-posts/:slug`, async (req, res) => {
    try {
      const blogPost = blogPostsData.find(bp => bp.slug === req.params.slug);
      if (!blogPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(blogPost);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });

  // Submit contact form (Lambda-like email function)
  app.post(`${apiRoute}/contact`, async (req, res) => {
    try {
      const { name, email, company, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
      }
      
      // Validate email format
      if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Send email via our Lambda-like function
      const emailResult = await sendContactEmail({
        name,
        email,
        company,
        message
      });
      
      if (emailResult.success) {
        res.status(200).json({ message: "Contact form submitted successfully" });
      } else {
        res.status(500).json({ message: emailResult.message });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Error submitting contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
