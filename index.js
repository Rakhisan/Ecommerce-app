import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
<<<<<<< HEAD
import path from "path";
import { fileURLToPath } from "url";
=======
import path from 'path'
>>>>>>> 581b304ec3b5f9aaac3c3113275530ec76e7661e

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "./client/build")));
=======
app.use(express.static(path.join(__dirname,"./client/build")));
>>>>>>> 581b304ec3b5f9aaac3c3113275530ec76e7661e

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
<<<<<<< HEAD
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
=======
app.use("*",function (req, res) {
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
>>>>>>> 581b304ec3b5f9aaac3c3113275530ec76e7661e
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
