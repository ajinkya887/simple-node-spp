const mongoose = require("mongoose");

async function connectDB() {
    try {
      await mongoose.connect("mongodb+srv://ajinkyasontakke07:wNjXay2D1IYdqyV9@cluster0.2890n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("MongoDB Connected");
    } catch (err) {
      console.error("Mongo Error:", err);
      process.exit(1);
    }
  }

module.exports = connectDB;
