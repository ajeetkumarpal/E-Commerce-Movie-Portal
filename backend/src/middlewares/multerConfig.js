import multer from "multer";
import path from "path";

const multerStorage=multer.diskStorage({
    destination:function(req,file,next){
        next(null,"public/upload");
    },
    filename:function(req,file,next){
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:multerStorage})

export default upload;