import { useEffect } from 'react';
import {logoutApi} from '../../Services/AuthService';
import { useNavigate } from 'react-router-dom';

function LogoutComponent(){
  const navigate = useNavigate()
  
  useEffect(()=>{
    const callLogout = async ()=>{
      const res = await logoutApi();
      if(res.status == 200){
        navigate('/login')
      }
    }
    callLogout();
  })
}

export default LogoutComponent;