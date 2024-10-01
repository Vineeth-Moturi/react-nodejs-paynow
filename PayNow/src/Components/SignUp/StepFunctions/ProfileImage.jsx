import React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { uploadFileApi, fetchFileApi } from '../../../Services/FileHandlerService';
import { useSnackBar } from '../../../Helpers/SnackBarHelper';
import { useUser} from '../../../Helpers/UserHelper';

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

const ProfileImage = React.memo( ({userDetails}) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const showSnackBar = useSnackBar();
  const navigate = useNavigate();
  const { user, updateUser} = useUser();

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
      const res = await uploadFileApi(formData, userDetails.userEmail);
      if(res){
        showSnackBar({message: res.data.message, severity: 'warning', transition: 'SlideTransition'})
        updateUser({
          userProfilePic: res?.data?.userDetails?.profile_image,
          userProfilePicUrl: res?.data?.userDetails?.profile_image_url,
        })
        navigate("/home")
      }
    } catch(error) {
      console.error('Error uploading the image:', error);
    }
  }

  return(
    <div className='d-flex row align-items-center justify-content-center'>
      {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: '200px', marginTop: '20px' }} />}
      <Box className="d-flex justify-content-center" sx={{padding: "1%", width: '100%'}}>
      <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          >
          Choose file
          <input type='file' hidden onChange={handleFileChange} accept="image/*" />
        </Button>

        <Button variant="contained" onClick={handleFileUpload}>
          Upload
        </Button>
      </Box>
    </div>
  )
});
export default ProfileImage;

{/* <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
          multiple
        /> */}
