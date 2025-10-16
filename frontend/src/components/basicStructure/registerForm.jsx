import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterForm() {
  const navigate=useNavigate();
  const inputNamePasswordAndemail = {
    height: "40px",
    color: "#362e20",
    width: '500px',
    margin: "12px 0px",
    border: "1px solid gray",
    padding: "0px 10px",


  }
  let signUp = {
    height: "40px",
    width: '500px',
    backgroundColor: "brown",
    color: "white",
    textAlign: "center",
    marginTop: "55px",
    marginLeft: "20px",

  }


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  const nameInputChange = (e) => {
    setName(e.target.value);
  }
  const emailInputChange = (e) => {
    setEmail(e.target.value);
  }
  const passwordInputChange = (e) => {
    setPassword(e.target.value);
  }
  const passwordCnfInputChange = (e) => {
    setCnfPassword(e.target.value);
  }



  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("cnfPassword", cnfPassword);

      if (password !== cnfPassword) {
      alert("please, write correct password");
      return;
    } 
    // else {
    //   // alert("form submitted");
    // }

    try {
      const responseFirst = await axios.get("http://localhost:5000/");
      const resultFirst = responseFirst.data.message;
      console.log("normal call", resultFirst);

    const responseSecond = await axios.post("http://localhost:5000/register",{  name,
      email,
      password});
      const resultSecond = responseSecond.data.message;
      console.log("register call", resultSecond);
            console.log("register", responseSecond);

      if(responseSecond.data.success){
        navigate("/login");
        alert(responseSecond.data.message);
 
      }else{
           alert(responseSecond.data.message);
      }
       console.log("register sucessfull");
    }
    catch (err) {
      // console.log("error backend fetching", err);
      if(err.response){
        console.log(err.response.data.message);
      }
      else{
        console.log(err.message);
      }

    }
    //  alert("registration submitted");
   
  
  }



  return (
    <fieldset className="bg-gray-200 font-bold mx-auto my-15 h-120 w-180 px-20 py-10 border-1 border-gray-700">
      <legend className="text-white font-bold rounded-sm bg-gray-800 h-10 w-38 text-center pt-1" >Sign-Up Form</legend>
      <form onSubmit={submitHandler}>

        <label htmlFor="myName">Name:</label>
        <input type="text" onChange={nameInputChange} style={inputNamePasswordAndemail} id="myName" placeholder="Enter your name" name="name" minLength={4} />
        <br />
        <label htmlFor="myEmail">Email: </label>
        <input type="email" onChange={emailInputChange} style={inputNamePasswordAndemail} id="myEmail" name="email" placeholder="Enter your email" required />
        <br />
        <label htmlFor="mypassword">Password:</label>
        <input type="password" onChange={passwordInputChange} style={{ ...inputNamePasswordAndemail, width: '474px' }} name="password" id="mypassword" minLength={5} required />
        <br />
        <label htmlFor="myCnfpassword">Confirm Password:</label>
        <input type="password" onChange={passwordCnfInputChange} style={{ ...inputNamePasswordAndemail, width: '408px' }} name="cnfPassword" id="myCnfpassword" minLength={5} required />
        <br />
        
  <button style={signUp} type="submit">Sign Up</button>

      </form>
    </fieldset>
  )
}
export default RegisterForm;