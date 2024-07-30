import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import {useUser} from '../../../Helpers/UserHelper';



function DashboardHeader(){
  return(
    <div className="d-flex col-12">
      <div className="col-4">
        <GreetUser />
      </div>

      <div className="col-4">
        
      </div>

      <div className="col-4">
        
      </div>

    </div>
  )
}
export default DashboardHeader;


function GreetUser(){
  const [greetVal, setGreetVal] = useState();
  const {user, updateUser} = useUser();
  
  useEffect(() => {
    var date = new Date()
    if(date.getHours()<12){
      setGreetVal("Good Morning..")
    }else if(date.getHours() >= 12 && date.getHours() < 16){
      setGreetVal("Good Afternoon..")
    }else if(date.getHours() >= 16 && date.getHours() < 21){
      setGreetVal("Good Evening..")
    }else{
      setGreetVal("Hello..")
    }
  }, []);

  return(
    <Typography variant="h4" sx={{fontWeight: '700', padding: '5px'}}>
      Hi {user ? user.userName : ''} <br /> {greetVal}
    </Typography>
  )
}