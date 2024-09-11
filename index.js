import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import mongoose from "mongoose"; //
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//configure env
dotenv.config();

mongoose.set("strictQuery", false); // Add this line to configure strictQuery

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./client/build")));
//
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Serve index.html for all non-API routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), (err) => {
    if (err) {
      res.status(404).send("404 Not Found");
    }
  });
});

//PORT
const PORT = process.env.PORT || 8080;

// app.js
import { getConfig } from "./config.js";

console.log(getConfig()); // Access process.env.CONFIG_VARIABLE dynamically

//run listen
app.listen(8080, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${8080}`.bgCyan
      .white
  );
});
