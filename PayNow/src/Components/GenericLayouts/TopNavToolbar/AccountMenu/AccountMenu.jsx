import { IconButton, MenuItem, Menu } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

import { useUser } from "../../../../Helpers/UserHelper";
import { useNavigate } from "react-router-dom";

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


  return(
    <>
      <IconButton 
        onClick={handleClick}
        aria-controls= { isOpen ? 'account-btn' : undefined }
        aria-haspopup= 'true'
        aria-expanded= { isOpen ? true : undefined }
        >
        <Avatar sx={{height: 28, width: 28}}
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