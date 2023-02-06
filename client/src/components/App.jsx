import React from "react";

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
