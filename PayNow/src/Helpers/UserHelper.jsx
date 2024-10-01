import React, {createContext, useState, useContext, useEffect } from 'react';

import { fetchFileApi } from "../Services/FileHandlerService";

const UserContext = createContext();
export const useUser = () => {return useContext(UserContext); }

const UserHelper = ( {children} ) => {
  const [user, setUser] = useState({
    userName: '',
    userEmail: '',
    userProfilePic: '',
    userProfilePicUrl: '',
  });

  const updateUser = (userUpdatedData) => {
    setUser((prev_val) => ({
      ...prev_val,
      ...userUpdatedData
    }));
  }

  const getUserProfilePic = async () => {
    // 
    if(user?.userProfilePic != ''){
      const profl_picture = await fetchFileApi(user.userProfilePic)
    }
  };

  useEffect(() => {
    if(user != null){
      getUserProfilePic();
    }
  }, [user]);

  return(
    <UserContext.Provider value={{user, updateUser}}>
      { children }
    </UserContext.Provider>
  );
}
export default UserHelper;