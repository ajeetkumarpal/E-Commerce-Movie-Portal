import express from "express";
import loginController from "../controller/loginController.js";
const loginRouter=express.Router();


loginRouter.post("/",loginController);
export default loginRouter;

/*
200 → OK (Success) =>                          201 → Created (New record ban gaya) =>
204 → No Content (No data return) =>           400 → Bad Request (Galat data) => 
401 → Unauthorized (Login ya token error) =>   403 → Forbidden (Access deny) =>
404 → Not Found (Data ya route nahi mili) =>   409 → Conflict (Duplicate data) => 
422 → Unprocessable Entity (Validation fail) =>500 → Internal Server Error (Server issue).
*/