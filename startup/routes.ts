import express, { Express } from "express";
import projects from "../routes/projects";
import messages from "../routes/messages";
import home from "../routes/home";
import error from "../middleware/error";

function routes(app: Express) {
  app.use(express.json());
  app.use(express.static("frontend/build"));
  app.use("/", home);
  app.use("/api/projects", projects);
  app.use("/api/messages", messages);
  app.use(error);
}

export default routes;
