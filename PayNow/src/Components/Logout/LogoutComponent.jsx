import {React , useEffect } from 'react';
import {logoutApi} from '../../Services/AuthService'

function LogoutComponent(){
  
  useEffect(()=>{
    const logout = logoutApi();
  })
}

export default LogoutComponent;