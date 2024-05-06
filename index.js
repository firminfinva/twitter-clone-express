import express from "express";
import homeRoute from "./routes/home.route.js";
import tweetsRoute from "./routes/tweets.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

app.use("/tweets", tweetsRoute);

app.use("/", userRoute);

app.use("/", homeRoute);

app.listen(3000, () => {
  console.log("we are live");
});
