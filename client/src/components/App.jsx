import React from "react";

//Components
import Header from "./Header";
import LandingPage from "./LandingPage";
import JobList from "./JobList";

//Styles
import "../styles/App.css";

export default function App() {
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

      <container>
        <JobList />
        <div className="rhs-input-sections">
        <section>Input CV</section>
        <section>Input Job Desc</section>
        <section>Tone customisation</section>
        <section>Length Customisation</section>
        <section>Creativity Customistion</section>
        <button> Generate Cover Letter </button>
        <section>Cover Letter text</section>
        <button> Edit</button>
        <button> Regenerate</button>
        <button> Download/Save to FS </button>
        </div>
      </container>
    </main>
  );
}
