import Header from "./Header";
import LandingPage from "./LandingPage";
import JobList from "./JobList";
import CoverLetter from "./CoverLetter";
import InputResume from "./InputResume";
import InputJobDesc from "./InputJobDesc";
import CustomTone from "./CustomTone";
import CustomLength from "./CustomLength";
import Button from "./Button";
import Footer from "./Footer";
import CustomLengthProvider from "../providers/CustomLengthProvider";
import CustomToneProvider from "../providers/CustomToneProvider";
import ResumeProvider from "../providers/ResumeProvider";

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
            <InputJobDesc />

            <ResumeProvider>
              <InputResume />
            </ResumeProvider>
            
            <CustomToneProvider>
              <CustomTone />
            </CustomToneProvider>

            <CustomLengthProvider>
              <CustomLength />
            </CustomLengthProvider>
            {/* stretch <CustomCreativity /> */}
          </div>

          <Button>Generate Cover Letter</Button>

          {/* coverLetterExists && */}
          <CoverLetter />
        </div>
      </main>
      <Footer />
    </main>
  );
}
