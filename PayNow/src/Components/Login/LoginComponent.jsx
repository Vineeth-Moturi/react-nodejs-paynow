import React from "react";
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import './LoginStyles.css'
import loginAbrsract1 from '../../assets/loginAbrsract1.jpg'


// const loginImgPaper = styled(Paper)(({theme}) => ({
//   width: 120,
//   height: 120,
//   textAlign: 'center',
//   padding: theme.spacing(2),
//   ...theme.typography.body2
// }));

function LoginComponent(){
  return(
    <div className="d-flex w-100 h-100">
      <div className="d-flex col-6" style={{backgroundColor: '#fff2db'}}>
        <Card sx={{ width: '100%', margin: '4%'}}>
          <img src={loginAbrsract1} style={{width: '100%', height: '100%'}} />
        </Card>
      </div>

      <div className="d-flex col-6" style={{backgroundColor: 'whitesmoke'}}>
        <Card sx={{ width: '100%', margin: '15%', backgroundColor: 'transparent', boxShadow: 'none'}}>
          
        </Card>
      </div>
    </div>
    
  );
}


function signUp(){
  <div className="d-flex w-100 h-100 align-items-center justify-content-center" style={{backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'}}>
      <div className="d-flex flex-column align-items-center justify-content-center rounded-2" >
        <div className="card rounded-3 border-0 m-2 align-items-center w-100">
          {/* <div className="row">
            <h2>Login</h2>
          </div>
          <div className="mt-2 mb-2">
            <input type="text" name="username" className="form-control " placeholder="Email"></input>
            <input type="text" name="password" className="form-control mt-1" placeholder="Password"></input>            
          </div>
          <div className="mt-2 mb-2">
            <button className="btn" style={{color: "rgb(255 233 230)", backgroundColor: "#003F80"}}> Login </button>
          </div> */}
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <h2>Login</h2>
            <div>
              <TextField
                id="outlined-password-input"
                label="Useremail"
                type="text"
                autoComplete="off"
              />
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="off"
              />
            </div>
            

          </Box>
        </div>
       
      </div>
    </div>
}

export default LoginComponent;