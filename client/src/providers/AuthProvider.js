//Making user id accessible for sql queries.
//Tracks if login/logout has been clicked

import axios from 'axios';
import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export function AuthProvider(props) {

  const [user, setUser] = useState();

  const login = (email, password) => {
    axios.post(`/api/users/login`, { email, password })
      .then(res => {
        setUser(res.data)
      })

  }

  const logout = () => {
    setUser(null);
  }

  ///To track login/logout button clicks
  const [isClicked, setIsClicked] = useState(false);

  const handleLoginLogoutClick = () => {
    setIsClicked((current) => !current);
  };

  const providerData = { user, login, logout, isClicked, handleLoginLogoutClick }

  return (
    <authContext.Provider value={providerData}>
      {props.children}
    </authContext.Provider>
  );
}

export const useAuthContext = () => useContext(authContext);