import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT;
const MONGODB_URL=process.env.MONGODB_URL;
const CLOUDINARY_NAME=process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET;
const JWT_SECRET=process.env.JWT_SECRET;
const JWT_EXPIRY=process.env.JWT_EXPIRY;

export {PORT,MONGODB_URL,CLOUDINARY_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,JWT_SECRET,JWT_EXPIRY};




//ajeetkumarpal22_db_user    