import express from "express";
const app = express();
import fetchRouter from "./router/fetchRoute.js";
import databaseconnect from "./config/databaseConfig.js";
import cookieParser from "cookie-parser";
import cors from "cors";

databaseconnect();

app.use(express.json()); 
app.use(cookieParser()); 

app.use(cors({ 
  origin: "http://localhost:5173", 
  credentials: true 
})); 

app.use("/api/fetch", fetchRouter);

app.use("/", (req, res) => {
  res.status(200).json({ data: "server ;)" });
});

export default app;