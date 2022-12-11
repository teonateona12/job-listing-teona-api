import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();
app.get("/", (req, res) => {
  res.send(data);
});

app.listen(5000);
