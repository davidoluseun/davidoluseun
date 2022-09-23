import path from "path";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
});

export default router;
