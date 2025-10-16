import express from "express";
import registractionController from "../controller/registractionController.js";
const registerRouter=express.Router();


registerRouter.post("/",registractionController);
export default registerRouter;
