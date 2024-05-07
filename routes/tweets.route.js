import { Router } from "express";
import {
  tweetsControler,
  postTweetsControler,
} from "../controllers/tweets.controler.js";

const tweetsRoute = Router();

tweetsRoute.post("/", postTweetsControler);

tweetsRoute.use("/", tweetsControler);

export default tweetsRoute;
