import React, {createContext, useState, useContext } from 'react';

const UserContext = createContext();
export const useUser = () => {return useContext(UserContext); }

const UserHelper = ( {children} ) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  }

  return(
    <UserContext.Provider value={{user, updateUser}}>
      { children }
    </UserContext.Provider>
  );
}
export default UserHelper;