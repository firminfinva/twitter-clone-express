import { Router } from "express";
import { homeControler } from "../controler/home.controler.js";

const homeRoute = Router();
homeRoute.use("/", homeControler);

export default homeRoute;
