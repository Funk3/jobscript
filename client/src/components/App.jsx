import Header from './Header';
import LandingPage from './LandingPage';
import JobList from './JobList';
import CoverLetter from './CoverLetter';
import InputResume from './InputResume';
import InputJobDesc from './InputJobDesc';
import CustomTone from './CustomTone';
import CustomLength from './CustomLength';
import GenerateCoverLetter from './GenerateCoverLetter';
import Footer from './Footer';

//Providers
import {CustomLengthProvider} from '../providers/CustomLengthProvider';
import {CustomToneProvider} from '../providers/CustomToneProvider';
import {ResumeProvider} from '../providers/ResumeProvider';
import {CoverLetterProvider} from '../providers/CoverLetterProvider';
import {JobDescProvider} from '../providers/JobDescProvider';

//Styles
import '../styles/App.css';

export default function App() {
  //determine if coverLetterTextExists, if it does, render the section. If not, hide the section

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

      <CoverLetterProvider>
        <CustomLengthProvider>
          <CustomToneProvider>
            <JobDescProvider>
              <ResumeProvider>
                <main>
                  <JobList />
                  <div className='rhs-sections'>
                    <div className='rhs-user-inputs'>
                      <InputResume />

                      <InputJobDesc />

                      <CustomTone />

                      <CustomLength />
                    </div>

                    <GenerateCoverLetter/>

                    <CoverLetter />
                  </div>
                </main>
              </ResumeProvider>
            </JobDescProvider>
          </CustomToneProvider>
        </CustomLengthProvider>
      </CoverLetterProvider>

      <Footer />
    </main>
  );
}
