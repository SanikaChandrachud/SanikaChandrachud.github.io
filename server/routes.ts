import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { db } from "@db";
import { projects } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Project routes
  app.get("/api/projects", async (_req, res) => {
    const allProjects = await db.select().from(projects);
    res.json(allProjects);
  });

  app.post("/api/projects", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    
    const [project] = await db.insert(projects).values(req.body).returning();
    res.status(201).json(project);
  });

  app.get("/api/projects/:id", async (req, res) => {
    const [project] = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(req.params.id)))
      .limit(1);

    if (!project) return res.sendStatus(404);
    res.json(project);
  });

  const httpServer = createServer(app);
  return httpServer;
}
