import React, { useState } from "react";

//Components
import JobList from "./JobList";
import CoverLetter from "./CoverLetter/CoverLetter";
import InputResume from "./InputResume";
import InputJobDesc from "./InputJobDesc";
import CustomTone from "./CustomTone";
import GenerateCoverLetter from "./buttons/GenerateCoverLetter";

//Providers
import { CustomToneProvider } from "../providers/CustomToneProvider";
import { ResumeProvider } from "../providers/ResumeProvider";
import { CoverLetterProvider } from "../providers/CoverLetterProvider";
import { JobDescProvider } from "../providers/JobDescProvider";
import { ManageCoverLetterProvider } from "providers/ManageCoverLetterProvider";

export default function AppPage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <CoverLetterProvider>
        <CustomToneProvider>
          <JobDescProvider>
            <ResumeProvider>
              <ManageCoverLetterProvider>

              <main className="cards">
                <JobList />
                <div className="center-sections">
                  <div className="center-user-inputs">
                    <InputResume />

                    <InputJobDesc />

                    <CustomTone />

                    <GenerateCoverLetter setLoading={setLoading} />
                  </div>
                </div>
                {loading ? (
                  <div className="rhs-sections">
                  <h1>Loading...</h1>

                </div>
                ) : (
                  <div className="rhs-sections">
                    <CoverLetter />
                  </div>
                )}
              </main>
              </ManageCoverLetterProvider>
            </ResumeProvider>
          </JobDescProvider>
        </CustomToneProvider>
      </CoverLetterProvider>
    </>
  );
}
