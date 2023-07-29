const mongoose = require("mongoose");
const Video = require("./models/Video");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/TokPlay", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", async () => {
  try {
    await Video.deleteMany({});
    await Product.deleteMany({});

    // Sample video data
    const videos = [
      { VideoID: "video_id_1", UrlImageThumbnail: "https://example.com/thumbnail1.jpg" },
      { VideoID: "video_id_2", UrlImageThumbnail: "https://example.com/thumbnail2.jpg" },
      // Add more sample video data...
    ];

    // Sample product data
    const products = [
      {
        ProductID: "product_id_1",
        VideoID: "video_id_1",
        LinkProduct: "https://example.com/product1",
        Title: "Product 1",
        Price: 29.99,
      },
      {
        ProductID: "product_id_2",
        VideoID: "video_id_1",
        LinkProduct: "https://example.com/product2",
        Title: "Product 2",
        Price: 39.99,
      },
      // Add more sample product data...
    ];

    await Video.insertMany(videos);
    await Product.insertMany(products);

    console.log("Sample data inserted successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
});
