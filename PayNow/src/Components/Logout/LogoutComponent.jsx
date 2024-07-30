import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser} from '../../Helpers/UserHelper';
import {logoutApi} from '../../Services/AuthService';

function LogoutComponent(){
  const navigate = useNavigate();
  const {user, updateUser} = useUser();
  
  const callLogout = async ()=>{
    const res = await logoutApi();
    if(res.status == 200){
      updateUser(null)
      navigate('/login')
    }
  }

  useEffect(()=>{
    callLogout();
  })
}

export default LogoutComponent;