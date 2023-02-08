// to be able to access user_id in database queries
import Cookies from 'js-cookie';
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function Cookie() {
  Cookies.set('Zak', 'Zak');
}

export function AuthProvider(props) {

  const [user, setUser] = useState("kirsten");

  const login = (newUser) => {
    setUser(newUser)
  }

  const logout = () => {
    setUser();
    //clear cookies
  }

  const providerData = {user, login, logout}

  return (
    <AuthContext.Provider value={providerData}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);