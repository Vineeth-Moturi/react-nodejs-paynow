import React from "react";
import './LoginStyles.css'


// style={{backgroundColor: "#6c757d"}}
function LoginComponent(){
  return(
    <div className="d-flex w-100 h-100 overflow-y-auto" >
      <div className="container flex-column w-50 h-50" style={{backgroundColor: '#FFEC51'}}>
        <span>
          SignUp
        </span>
        <span>
          Submit
        </span>
       
      </div>
    </div>
    
  );
}
export default LoginComponent;