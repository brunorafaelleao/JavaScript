import express from "express";
import { listarPosts } from "../controllers/postsController.js";

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
