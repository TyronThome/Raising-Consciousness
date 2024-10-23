import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import charges from "./api/charges.js";

const __dirname = path.resolve();
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://www.raisingconsciousness.co.za",
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/charges", charges);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

export default app;
