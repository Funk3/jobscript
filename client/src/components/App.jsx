import React, { useState } from "react";

//Components
import Header from "./Header";
import LandingPage from "./LandingPage";
import JobList from "./JobList";
import CoverLetter from "./CoverLetter";
import InputResume from "./InputResume";
import InputJobDesc from "./InputJobDesc";
import CustomTone from "./CustomTone";
import CustomLength from "./CustomLength";
import CustomCreativity from "./CustomCreativity";
import Button from "./Button";

//Styles
import "../styles/App.css";

export default function App() {
  //If we get user auth done:
  //Helper function here to find out if user exists eg currentUser takes in req.session and returns user object
  //if currentUser, render LandingPage, else render dashboard
  //pass currentUser into <Header/> component to render login/logout

  return (
    <main>
      <Header />
      <section>
        {/* render landing page if user is not logged in */}
        {/* eg !currentUser && */} <LandingPage />
      </section>

      <main>
        <JobList />
        <div className="rhs-sections">
          <div className="rhs-user-inputs">
            <InputResume />
            <InputJobDesc />
            <CustomTone />
            <CustomLength />
            {/* stretch <CustomCreativity /> */}
          </div>

          <Button> Generate Cover Letter</Button>
          
                {/* coverLetterExists && */}
          <CoverLetter />
        </div>
      </main>
    </main>
  );
}


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