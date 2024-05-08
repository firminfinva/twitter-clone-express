import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import homeRoute from "./routes/home.route.js";
import tweetsRoute from "./routes/tweets.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://twitter-clone-six-sooty.vercel.app",
    ], // Change this to your localhost URL
    methods: ["GET", "POST"], // Allow GET and POST requests
  })
);

let PORT = process.env | 3000;

app.use(express.json());

app.use("/tweets", tweetsRoute);

app.use("/", userRoute);

app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log("we are live");
});
