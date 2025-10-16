import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm(){
  const navigate=useNavigate();
    const inputNamePasswordAndemail={
        height:"40px",
        color:"#362e20",
        width:'500px',
        margin:"10px 0px",
        border:"1px solid gray",
        padding:"0px 10px",


    }
    let signIn={
         height:"40px",
         width:'500px',
         backgroundColor:"brown",
         color:"white",
         textAlign:"center",
         marginTop:"45px",
         marginLeft:"20px",

    }
    const [loginEmail,setLoginEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");

    const SubmitLoginHandler=async (e)=>{
        e.preventDefault();
        console.log("loginEmail",loginEmail);
        console.log("loginPassword",loginPassword);

    try{
          const responseLogin=await axios.post("http://localhost:5000/login",  {email:loginEmail,
            password:loginPassword
          });
        console.log("response login",responseLogin);
     if(responseLogin.data.success){
      
              alert(responseLogin.data.message);
              navigate("/profile");
     }
     else{
alert(responseLogin.data.error);
     }
    }
    catch(err){
      // console.log("frontend post api call",err);
      if(err.response){
        console.log(err.data.message);
      }else{
                console.log(err.message);
      }
    }

// alert("login submitted");

    }

    return(
     <fieldset className="bg-gray-200 font-bold mx-auto my-25 h-85 w-180 px-20 py-10 border-1 border-gray-700">
        <legend className="text-white font-bold rounded-sm bg-gray-800 h-10 w-38 text-center pt-1" >Sign-In Form</legend>
         <form action="" onSubmit={SubmitLoginHandler}>
          
        <label htmlFor="myEmail">Email: </label>
        <input type="email" onChange={(e)=>setLoginEmail(e.target.value)} style={inputNamePasswordAndemail} id="myEmail" name="email" placeholder="Enter your email" />
          <br/>
        <label htmlFor="mypassword">Password:</label>
        <input type="password" onChange={(e)=>setLoginPassword(e.target.value)} style={{...inputNamePasswordAndemail, width:'474px'}} name="password" id="mypassword" minLength={5}/>
 
       <button style={signIn} type="submit">Login</button>
        
      </form>
     </fieldset>
    )
}
export default LoginForm;