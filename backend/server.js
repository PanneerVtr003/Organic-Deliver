import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { WebSocketServer } from "ws";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Routes
app.use("/api/orders", orderRoutes);

// Start HTTP server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);

// WebSocket server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("🔌 New WebSocket connection");

  ws.on("message", (message) => {
    console.log("📩 Received:", message.toString());
    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => console.log("❌ WebSocket disconnected"));
});
