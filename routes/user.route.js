import { Router } from "express";
import {
  getTweetsWithMediaControler,
  getUserTweetsControler,
  getUserControler,
} from "../controler/user.controler.js";

const userRoute = Router();

userRoute.use("/:handle/media", getTweetsWithMediaControler);

userRoute.use("/:handle/tweets", getUserTweetsControler);

userRoute.use("/user", getUserControler);

export default userRoute;
