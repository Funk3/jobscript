import React from "react";

//Components
import LandingPage from "./LandingPage";

//Styles
import '../styles/App.css';

export default function App() {

//Helper function here to find out if user exists eg currentUser takes in req.session and returns user object

  return (
    <main>
      Jobscript 
      <section>
          {/* render landing page if user is not logged in */}
        {/* eg !currentUser && */} <LandingPage />
      </section>
    </main>
  );
}

