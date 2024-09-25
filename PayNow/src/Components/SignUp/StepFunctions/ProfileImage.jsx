import React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from '@mui/material/styles';

import { uploadFileApi, fetchFileApi } from '../../../Services/FileHandlerService';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const ProfileImage = React.memo( ({fields}) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const fileUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(fileUrl);
  }

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    try{
      const res = await uploadFileApi({formData});
      if(res){
        console.log('Image uploaded successfully:', res);
      }
    } catch(error) {
      console.error('Error uploading the image:', error);
    }
  }

  return(
    <Box className="d-flex" sx={{padding: "1%", alignContent: "center", width: '100%'}}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        >
        Upload file
        <input type='file' hidden onChange={handleFileChange} accept="image/*" />
      </Button>

      <Button variant="contained" onClick={handleFileUpload}>
        Submit File
      </Button>
    </Box>
  )
});
export default ProfileImage;

{/* <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
          multiple
        /> */}
