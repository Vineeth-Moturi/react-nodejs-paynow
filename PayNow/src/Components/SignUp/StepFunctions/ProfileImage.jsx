import React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

const ProfileImage = React.memo( ({fields}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  console.log('fields',fields)
  return(
    <Box sx={{padding: "1%"}}>
      {fields.map((field, index) => (
        <TextField 
          key={index}
          id={`lg-useremail-${index}`}
          label={field.label}
          variant="standard"
          sx={{display: 'flex', marginTop: '2%'}}
          style={{fontSize: 22}}
          value={field.value}
          onChange={(e)=>{field.updateHandler(e.target.value)}}
        />
      ))}
    </Box>
  )
});
export default ProfileImage;
