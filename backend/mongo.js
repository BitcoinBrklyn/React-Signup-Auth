const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI; // Use the environment variable

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
