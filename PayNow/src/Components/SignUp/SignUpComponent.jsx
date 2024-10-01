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
import { useSnackBar } from '../../Helpers/SnackBarHelper';

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
  const showSnackBar = useSnackBar();

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
    <ProfileImage userDetails={user} />
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
        userName: res?.data?.userDetails?.username,
        userEmail: res?.data?.userDetails?.useremail,
        userProfilePic: res?.data?.userDetails?.userInfo?.profile_image,
        userProfilePicUrl: res?.data?.userDetails?.userInfo?.profile_image_url,
      })
      showSnackBar({message: res?.data?.message, severity: 'warning', transition: 'SlideTransition'})
    }else{
      showSnackBar({message: res?.data?.message,variant: 'standard', transition: 'SlideTransition'})
    }
  }

  return (
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
            <LinearStepperHelper steps={steps} submitHandler={submitSignUpDetails} components={components} user={user} />
          </Box>
        </Card>
      </div>
    </div>
  )
}
export default SignUpComponent;
