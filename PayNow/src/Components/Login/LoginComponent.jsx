import React from "react";
import './LoginStyles.css'
import loginBg from '../../assets/loginBgPaynow.jpg'


// Component Implemented in Bootstrap #FFEC51
// style={{backgroundColor: '#003F80'}}
function LoginComponent(){
  return(
    <div className="d-flex w-100 h-100 align-items-center justify-content-center zoom-animation" style={{backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'}}>
      <div className="d-flex flex-column align-items-center justify-content-center rounded-2" >
        <div className="card rounded-3 border-0 m-2 align-items-center w-100">
          <div className="row">
            <h2>Login</h2>
          </div>
          <div className="mt-2 mb-2">
            <input type="text" name="username" className="form-control " placeholder="Email"></input>
            <input type="text" name="password" className="form-control mt-1" placeholder="Password"></input>            
          </div>
          <div className="mt-2 mb-2">
            <button className="btn" style={{color: "rgb(255 233 230)", backgroundColor: "#003F80"}}> Login </button>
          </div>
        </div>
       
      </div>
    </div>
    
  );
}


function signUp(){

}

export default LoginComponent;