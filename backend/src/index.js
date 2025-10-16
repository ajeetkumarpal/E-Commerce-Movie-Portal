import express from "express";
import {PORT} from "./config/severConfig.js";
import registerRouter from "./routes/registerRoute.js";
import cors from "cors";
import validate from "./validation/formValidator.js";
import zodSchema from "./validation/zodSchema.js";
import connectDB from "./config/connectDB.js";
import loginRouter from "./routes/loginRoute.js";
// import upload from "./middlewares/multerConfig.js";
import path from "path";
import { fileURLToPath } from 'url';
import cloudinary from "./config/cloudinaryConfig.js";
import upload from "./middlewares/multerConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();

// Enable CORS for all origins (development ke liye)
app.use(cors());
app.use(express.json()); // body parsing ke liye
app.use(express.urlencoded({extended: true }));

    app.set('view engine', 'ejs');
     app.set('views',path.join(__dirname,"/views")); 
     
app.get("/",(req,res)=>{
    res.render('profile',{
        username:"ajju",
        roll:"sg22305"
    })
})

app.post("/profile",upload.single("incomingimage"),async(req,res)=>{
  try{
      console.log(req.file);
    const resultUpload=await cloudinary.uploader.upload(req.file.path);
    console.log("result upload:",resultUpload);
    res.status(200).json({message:"profile image set on db"})
  }
  catch(err){
      res.status(500).json({message:"profile  not set on db"})
  }
})

app.use("/register",validate(zodSchema),registerRouter);
app.use("/login",validate(zodSchema),loginRouter);


app.listen(PORT,async()=>{
    await connectDB();
    console.log(`server sucessfully connected port ${PORT}`)
})