import { IconButton, MenuItem, Menu, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

import { useUser } from "../../../../Helpers/UserHelper";
import { useNavigate } from "react-router-dom";
import { BASE_URL} from '../../../../Services/FileHandlerService'

function AccountMenu(){
  const {user, updateUser} = useUser();
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () =>{
    setAnchorEl(null)
  }

  const routeNavigate = (route)=>{
    navigate(route)
  }

  const usrPrep = (user) => {
    if(user?.userProfilePicUrl){
      return BASE_URL + '/' + user?.userProfilePicUrl;
    }else{
      return undefined
    }
  }
  

  return(
    <>
      <Typography variant='h10' sx={{fontWeight: '500', color: 'whitesmoke', marginLeft: '7%', alignItems: 'center'}}> 
        {user?.userEmail} 
      </Typography>
      <IconButton 
        onClick={handleClick}
        aria-controls= { isOpen ? 'account-btn' : undefined }
        aria-haspopup= 'true'
        aria-expanded= { isOpen ? true : undefined }
        >
        <Avatar 
          sx={{height: 28, width: 28}}
          src={usrPrep(user)}
          >
          {(user && user.userName) ? user.userName[0] : "D"} 
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-btn"
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        >
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={()=>routeNavigate('/logout')}>LogOut</MenuItem>
      </Menu>
    </>
  );
}
export default AccountMenu;