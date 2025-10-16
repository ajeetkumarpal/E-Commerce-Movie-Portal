import mongoose from "mongoose";
import bcrypt from "bcrypt";
const formSchema=mongoose.Schema({
    name:{
     type:String,
     trim:true,
    //  required:[true,"it is mandatory"],
     minlength:[5,"please, at least 5 char"],
     lowercase:true,
    },
    email:{
   type:String,
     trim:true,
     required:[true,"it is mandatory"],
    unique:[true,"already exist"],
     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
     lowercase:true,
    },
    password:{
 type:String,
     trim:true,
      required:[true,"it is mandatory"],
    }

},{
    timestamps:true
});
//pre and post middleware 
formSchema.pre('save',async function(){
    const hashedPassword=await bcrypt.hash(this.password,10);
    console.log("hashedPassword",hashedPassword);
    this.password=hashedPassword;

})


const form=mongoose.model("form",formSchema);
export default form;
