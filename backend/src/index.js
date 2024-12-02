const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Debug log
console.log("Initializing server...");

// Middleware
app.use(express.json());

// Debug log
console.log("Middleware applied.");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit if the database fails to connect
  });

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Debug log
console.log("Routes set up.");

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
