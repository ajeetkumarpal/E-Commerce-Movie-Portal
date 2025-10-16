import mongoose from "mongoose";
import { MONGODB_URL } from "./severConfig.js";

async function connectDB(){
    try{
        await mongoose.connect(MONGODB_URL);
    }
    catch(err){
        throw{message:"failed to connet DB server",statusCode:500,err:err}
    }
}
export default connectDB;