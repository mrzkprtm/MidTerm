const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// API endpoint: /api/products/:videoID
router.get("/:videoID", async (req, res) => {
  const { videoID } = req.params;

  try {
    const products = await Product.find({ VideoID: videoID });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
