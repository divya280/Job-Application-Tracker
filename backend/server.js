require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/mongo");

const app = express();

// Middlewares

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173", // your frontend URL (Vite default)
  credentials: true,
};
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Routes
app.use("/api/auth", require("./src/routes/auth.routes")); // ✅ Added
app.use("/api/applications", require("./src/routes/jobApplication.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
