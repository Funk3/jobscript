import React, { useState } from "react";

//Components
import JobList from "./JobList";
import CoverLetter from "./CoverLetter";
import InputResume from "./InputResume";
import InputJobDesc from "./InputJobDesc";
import CustomTone from "./CustomTone";
import GenerateCoverLetter from "./buttons/GenerateCoverLetter";

//Providers
import { CustomToneProvider } from "../providers/CustomToneProvider";
import { ResumeProvider } from "../providers/ResumeProvider";
import { CoverLetterProvider } from "../providers/CoverLetterProvider";
import { JobDescProvider } from "../providers/JobDescProvider";

export default function AppPage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section>
        {/* render landing page if user is not logged in */}
        {/* eg !currentUser && <LandingPage /> */}
      </section>

      <CoverLetterProvider>
        <CustomToneProvider>
          <JobDescProvider>
            <ResumeProvider>
              <main className="cards">
                <JobList />
                <div className="center-sections">
                  <div className="center-user-inputs">
                    <InputResume />

                    <InputJobDesc />

                    <CustomTone />
                  </div>
                </div>
                {loading ? (
                  <div className="rhs-sections">
                    <img
                      src="../../loading.gif"
                      alt="loading"
                    />
                  </div>
                ) : (
                  <div className="rhs-sections">
                    <GenerateCoverLetter setLoading={setLoading} />

                    <CoverLetter />
                  </div>
                )}
              </main>
            </ResumeProvider>
          </JobDescProvider>
        </CustomToneProvider>
      </CoverLetterProvider>
    </>
  );
}
