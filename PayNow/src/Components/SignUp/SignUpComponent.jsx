import React from "react";
import { useNavigate } from 'react-router-dom'
import loginBg from '../../assets/loginBgPaynow.jpg';
import { useState, useMemo } from "react";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import signupBg from '../../assets/signupAbstract2.png';
import {signupApi}  from '../../Services/AuthService';
import { useUser} from '../../Helpers/UserHelper';
import LinearStepperHelper from '../../Helpers/LinearStepperHelper';
import UserDetails from './StepFunctions/UserDetails';
import Credentials from './StepFunctions/Credentials';
import ProfileImage from './StepFunctions/ProfileImage';

function SignUpComponent(){
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');


  const navigate = useNavigate();
  const { user, updateUser} = useUser();
  const steps = ['User Details', 'Credentials', 'Profile Image'];

  const UserDetailsFields = useMemo(() => [
    {label: "FirstName", value: firstname, updateHandler: setFirstname, validationRegex: '', type: 'text'},
    {label: "LastName", value: lastname, updateHandler: setLastname, validationRegex: '', type: 'text'},
    {label: "Phone", value: phone, updateHandler: setPhone, validationRegex: '', type: 'text'},
    {label: "Country", value: country, updateHandler: setCountry, validationRegex: '', type: 'text'}
  ])

  const CredentialsFields = useMemo(() => [
    {label: "Username", value: username, updateHandler: setUsername, validationRegex: '', type: 'text'},
    {label: "Email", value: useremail, updateHandler: setUseremail, validationRegex: '', type: 'text'},
    {label: "Password", value: password, updateHandler: setPassword, validationRegex: '', type: 'password'},
  ])

  const ProfileImageFields = useMemo(() => [
    {label: "Image", value: username, updateHandler: setUsername, validationRegex: '', type: 'file'},
  ])

  const components = useMemo(() => [
    <UserDetails fields={UserDetailsFields} />, 
    <Credentials fields={CredentialsFields} />,
    <ProfileImage />
  ]);
  // <ProfileImage fields={ProfileImageFields} />
  const submitSignUpDetails = async () => {
    const res = await signupApi({
      username: username, 
      useremail: useremail, 
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      country: country
    })
    if(res.status == 201 && res.data.userDetails){
      updateUser({
        userName: res.data.userDetails.username,
        userEmail: res.data.userDetails.email
      })
      navigate("/home")
    }
  }

  return (
    // <div className="d-flex w-100 h-100 align-items-center justify-content-center zoom-animation" style={{backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'}}>
    //   <div className="d-flex flex-column align-items-center justify-content-center rounded-2" >
    //     <div className="card rounded-3 border-0 m-2 align-items-center w-100">
    //       <div className="row">
    //         <h2>SignUp</h2>
    //       </div>
    //       <div className="mt-2 mb-2">
    //         <input type="text" name="username" value={username} onChange={ (e)=> { setUsername(e.target.value)}} className="form-control mb-1" placeholder="Username"></input>
    //         <input type="text" name="useremail" value={useremail} onChange={ (e)=> { setUseremail(e.target.value)}} className="form-control " placeholder="Email"></input>
    //         <input type="password" name="password" value={password} onChange={ (e)=> { setPassword(e.target.value)}} className="form-control mt-1" placeholder="Password"></input>            
    //       </div>
    //       <div className="mt-2 mb-2">
    //         <button className="btn" onClick={submitSignUpDetails} style={{color: "rgb(255 233 230)", backgroundColor: "#003F80"}}>
    //           SignUp
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="d-flex w-100 h-100" style={{backgroundColor: 'rgb(183 201 196)'}}>
      <div className="d-flex col-6" style={{backgroundColor: 'rgb(183 201 196)'}}>
        <Card sx={{ width: '100%', margin: '4%'}}>
          <img src={signupBg} style={{width: '100%', height: '100%'}} />
        </Card>
      </div>

      <div className="d-flex col-6" style={{backgroundColor: 'whitesmoke'}}>
        <Card sx={{ width: '100%', margin: '5%', backgroundColor: 'transparent', boxShadow: 'none', zIndex: '21'}}>
          <Box sx={{padding: "1%"}}>
            <div className="d-flex justify-content-center pb-3">
              <Typography variant='h4' sx={{fontWeight: '700'}}> SignUp </Typography>
            </div>
            <LinearStepperHelper steps={steps} submitHandler={submitSignUpDetails} components={components} />
          </Box>
        </Card>
      </div>
    </div>
  )
}
export default SignUpComponent;
