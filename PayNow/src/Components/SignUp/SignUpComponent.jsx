import React from "react";
import { useNavigate } from 'react-router-dom'
import loginBg from '../../assets/loginBgPaynow.jpg';
import { useState } from "react";
// import {isUserLoggedIn, setUserLoggedIn} from '../../Services/AuthService';
import {signupApi}  from '../../Services/AuthService';

function SignUpComponent(){
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitSignUpDetails = async () => {
    const res = await signupApi({username: username, useremail: useremail, password: password})
    if(res.status = 201){
      // setUserLoggedIn(true)
      navigate("/home")
    }
    // console.log("isUserLoggedIn", isUserLoggedIn)
  }

  return (
    <div className="d-flex w-100 h-100 align-items-center justify-content-center zoom-animation" style={{backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'}}>
      <div className="d-flex flex-column align-items-center justify-content-center rounded-2" >
        <div className="card rounded-3 border-0 m-2 align-items-center w-100">
          <div className="row">
            <h2>SignUp</h2>
          </div>
          <div className="mt-2 mb-2">
            <input type="text" name="username" value={username} onChange={ (e)=> { setUsername(e.target.value)}} className="form-control mb-1" placeholder="Username"></input>
            <input type="text" name="useremail" value={useremail} onChange={ (e)=> { setUseremail(e.target.value)}} className="form-control " placeholder="Email"></input>
            <input type="password" name="password" value={password} onChange={ (e)=> { setPassword(e.target.value)}} className="form-control mt-1" placeholder="Password"></input>            
          </div>
          <div className="mt-2 mb-2">
            <button className="btn" onClick={submitSignUpDetails} style={{color: "rgb(255 233 230)", backgroundColor: "#003F80"}}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUpComponent;
