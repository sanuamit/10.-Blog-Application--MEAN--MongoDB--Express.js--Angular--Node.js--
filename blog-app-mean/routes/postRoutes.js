const express = require("express");
const Post = require("../models/postModel");

const router = express.Router();

// Create a new post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.status(201).json(post);
});

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

module.exports = router;
