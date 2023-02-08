import React from 'react';
import { useAuthContext } from '../providers/AuthProvider';

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
import { CustomLengthProvider } from '../providers/CustomLengthProvider';
import { CustomToneProvider } from '../providers/CustomToneProvider';
import { ResumeProvider } from '../providers/ResumeProvider';
import { CoverLetterProvider } from '../providers/CoverLetterProvider';
import { JobDescProvider } from '../providers/JobDescProvider';

export default function AppPage(props) {
  const { user } = useAuthContext();

  return (
    <>
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
                      <p>user = {user.email} </p>
                      <InputResume />

                      <InputJobDesc />

                      <CustomTone />

                      <CustomLength />
                    </div>

                    <GenerateCoverLetter />

                    <CoverLetter />
                  </div>
                </main>
              </ResumeProvider>
            </JobDescProvider>
          </CustomToneProvider>
        </CustomLengthProvider>
      </CoverLetterProvider>

      <Footer />
    </>
  );
}
