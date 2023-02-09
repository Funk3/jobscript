import React from 'react';

//Components
import JobList from './JobList';
import CoverLetter from './CoverLetter';
import InputResume from './InputResume';
import InputJobDesc from './InputJobDesc';
import CustomTone from './CustomTone';
import CustomLength from './CustomLength';
import GenerateCoverLetter from './buttons/GenerateCoverLetter';

//Providers
import { CustomLengthProvider } from '../providers/CustomLengthProvider';
import { CustomToneProvider } from '../providers/CustomToneProvider';
import { ResumeProvider } from '../providers/ResumeProvider';
import { CoverLetterProvider } from '../providers/CoverLetterProvider';
import { JobDescProvider } from '../providers/JobDescProvider';

export default function AppPage() {

  return (
    <>
    
      <section>
        {/* render landing page if user is not logged in */}
        {/* eg !currentUser && <LandingPage /> */}
      </section>

      <CoverLetterProvider>
        <CustomLengthProvider>
          <CustomToneProvider>
            <JobDescProvider>
              <ResumeProvider>
                <main className='cards'>
                  <JobList />
                  <div className='rhs-sections'>
                    <div className='rhs-user-inputs'>
              
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

     
    </>
  );
}
