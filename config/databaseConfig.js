import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URL = process.env.URL;

// mongoDb database connection
const databaseconnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};

export default databaseconnect;
