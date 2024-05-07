import { Router } from "express";
import {
  getTweetsWithMediaControler,
  getUserTweetsControler,
  getCurrentUserControler,
} from "../controllers/user.controler.js";

const userRoute = Router();

userRoute.use("/:handle/media", getTweetsWithMediaControler);

userRoute.use("/user/:handle", getUserTweetsControler);

userRoute.use("/user", getCurrentUserControler);

export default userRoute;
