import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser())

app.use(express.json());

const port = process.env.PORT || 5000;
const databaseUrl = process.env.DATABASE_URL;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(databaseUrl, () => {
    console.log("Connected to MongoDB");
});