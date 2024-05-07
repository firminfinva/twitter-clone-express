import express from "express";
import dotenv from "dotenv";
import homeRoute from "./routes/home.route.js";
import tweetsRoute from "./routes/tweets.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

let PORT = process.env | 3000;

app.use(express.json());

app.use("/tweets", tweetsRoute);

app.use("/", userRoute);

app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log("we are live");
});
