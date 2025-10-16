import z  from "zod";
const zodSchema=z.object({
    // name:z.string().trim().min(5,"it is atleast 5 char").transform((str)=>(str.toLowerCase())),
     //name:z.string().trim().transform((str)=>(str.toLowerCase())),  //login me name nahi dene per ese karna padega
    email:z.email("invalid email address").trim(),
    password:z.string().min(4,"strong password"),
});
export default zodSchema;
