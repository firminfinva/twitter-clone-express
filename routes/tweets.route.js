import { Router } from "express";
import { tweetsControler } from "../controler/tweets.controler.js";

const tweetsRoute = Router();
tweetsRoute.use("/", tweetsControler);

export default tweetsRoute;
