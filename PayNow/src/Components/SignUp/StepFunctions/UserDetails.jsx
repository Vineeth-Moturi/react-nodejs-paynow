import React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const UserDetails = React.memo( ({fields}) => {
  return(
    <Box sx={{padding: "1%"}}>
      {fields.map((field, index) => (
        field.type != 'select' ? (
          <TextField 
            key={index}
            id={`lg-useremail-${index}`}
            label={field.label}
            variant="standard"
            sx={{display: 'flex', marginTop: '2%'}}
            style={{fontSize: 22}}
            value={field.value}
            onChange={(e)=>{field.updateHandler(e.target.value)}}
            type={field.type}
          />
        ) : (
          <FormControl variant="standard" sx={{display: 'flex', marginTop: '2%'}} style={{fontSize: 22}}>
            <InputLabel id={`lg-useremail-label-${index}`}>{field.label}</InputLabel>
            <Select
              labelId={`lg-useremail-label-${index}`}
              id={`lg-useremail-${index}`}
              value={field.value}
              onChange={(e)=>{field.updateHandler(e.target.value)}}
              >
                {Object.entries(field?.categoryList)?.map(([code, name], index) => (
                  <MenuItem value={code}>{code + ' : ' + name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        )
      ))}
    </Box>
  )
});
export default UserDetails;

