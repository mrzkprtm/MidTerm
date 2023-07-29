const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

// API endpoint: /api/videos/thumbnails
router.get("/thumbnails", async (req, res) => {
  try {
    const videos = await Video.find({}, "VideoID UrlImageThumbnail");
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Add API endpoint for Product List here
// Example: router.get('/products/:videoID', async (req, res) => { ... });

module.exports = router;
