import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Data from "./dataModel.js";

const app = express();
app.use(cors());
dotenv.config();

mongoose.connect(process.env.CONNECTION_URL);
app.get("/", async (req, res) => {
  const data = await Data.find();
  return res.send(data);
});

app.listen(5000);
