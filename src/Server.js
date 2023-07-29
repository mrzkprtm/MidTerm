const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/TopPlay", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check for database connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Check for database errors
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Middlewares
app.use(bodyParser.json());

// Define your API routes here
// Example: app.use('/api/videos', require('./routes/videos'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
