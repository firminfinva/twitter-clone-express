import { Router } from "express";
import { homeControler } from "../controllers/home.controler.js";

const homeRoute = Router();
homeRoute.use("/", homeControler);

export default homeRoute;
