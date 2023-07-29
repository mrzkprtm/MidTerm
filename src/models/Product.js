const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProductID: { type: String, required: true },
  VideoID: { type: String, required: true },
  LinkProduct: { type: String, required: true },
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
