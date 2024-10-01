import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

import './TopNavToolbar.css';
import AccountMenu from './AccountMenu/AccountMenu'

function TopNavToolbar(){

  return(
    <div className="top-navbar">
      <div className="d-flex">
        <div className="d-flex col-2">
          <Typography variant='h6' sx={{fontWeight: '700', color: '#7a7979', marginLeft: '7%'}}> PayNow </Typography>
        </div>

        <div className="d-flex col-8">
        </div>

        <div className="d-flex col-2 justify-content-end align-items-center">
          <AccountMenu />
        </div>
      </div>
    </div>
  )

}
export default TopNavToolbar;