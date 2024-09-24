import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import Button  from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import './LoginStyles.css'
import loginAbrsract1 from '../../assets/loginAbrsract1.jpg'
import { loginApi } from '../../Services/AuthService';
import { useSnackBar } from '../../Helpers/SnackBarHelper';
import { useUser} from '../../Helpers/UserHelper';



function LoginComponent(){
  const [useremail, setUseremail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  const showSnackBar = useSnackBar();
  const { user, updateUser} = useUser();

  const submitLogin = async ()=>{
    const res = await loginApi({useremail: useremail, password: password});
    if(res.status == 200){
      if(res.data.userDetails){
        updateUser({
          userName: res.data.userDetails.username,
          userEmail: res.data.userDetails.email
        })
      }
      navigate("/home")
    }else{
      showSnackBar({message: "Something Went Wrong", severity: 'warning', transition: 'SlideTransition'})
    }
  }

  return(
    <div className="d-flex w-100 h-100">
      <div className="d-flex col-6" style={{backgroundColor: '#fff2db'}}>
        <Card sx={{ width: '100%', margin: '4%'}}>
          <img src={loginAbrsract1} style={{width: '100%', height: '100%'}} />
        </Card>
      </div>

      <div className="d-flex col-6" style={{backgroundColor: 'whitesmoke'}}>
        <Card sx={{ width: '100%', margin: '15%', backgroundColor: 'transparent', boxShadow: 'none', zIndex: '21'}}>
          <Box sx={{padding: "1%"}}>
            <div className="d-flex justify-content-center">
              <Typography variant='h2' sx={{fontWeight: '700'}}> PayNow </Typography>
            </div>
            <TextField id="lg-useremail"
              label="Useremail"
              variant="standard"
              sx={{display: 'flex', marginTop: '2%'}}
              style={{fontSize: 22}}
              value={useremail}
              onChange={(e)=>{setUseremail(e.target.value)}}
            />
            <TextField id="lg-password"
              label="Password"
              type="password"
              variant="standard"
              value={password}
              sx={{display: 'flex', marginTop: '2%'}}
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <Button variant="contained" onClick={submitLogin} sx={{display: 'flex', width: '100%', marginTop: '4%', backgroundColor: '#212529', color: 'white'}}> 
              Login 
            </Button>
            <p style={{marginTop: '6%'}}> Dont have an account? <Button href="/signup"> SignUp </Button></p>
            <Button variant="outlined" sx={{display: 'flex', width: '100%', marginTop: '4%', backgroundColor: 'white', color: '#212529'}}> 
              Forgot Password 
            </Button>
          </Box>
        </Card>
      </div>
    </div>
    
  );
}

export default LoginComponent;