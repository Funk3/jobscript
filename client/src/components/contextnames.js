
//Context API
//providers/CVProvider.js - similar to custom hook but IT IS A COMPONENT

import {createContext, useState} from 'react'
export const CVContext = createContext()

const CVTextProvider = function(props) {
  
  [cvText, setCVText] = useState("");
  
  //setCVText? Add to database?

  const APIString = 123;
  
  const value = {cvText, APIString};

  return (
    < CVContext.Provider value = {value}>
    {props.children}
    </ CVContext.Provider>
  )
}
export default CVTextProvider;

//App.js
import CVTextProvider from 'provider'
return (
  <CVTextProvider>
  {/* pass props in here to CVTextProvider*/}
  </CVTextProvider>
)

////////////////////////////////////////////////////////////////
import {createContext, useState} from 'react'
export const AuthContext = createContext()

const AuthProvider = function(props) {
  
  [auth, setAuth] = useState(false);
  [user, setUser] = useState(null);
  
  const login function;
  const logout function;
  
  const value = {login, logout};

  return (
    < CVContext.Provider value = {value}>
    {props.children}
    </ CVContext.Provider>
  )
}
export default CVTextProvider;