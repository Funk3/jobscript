import React, { useState } from "react";
import axios from "axios";

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
import { useAuthContext } from 'providers/AuthProvider';


export default function AppPage() {
  const [loading, setLoading] = useState(false);
  
  const [jobData, setJobData] = useState([]);

  const { user } = useAuthContext();
  const fetchJobData = () => {
    axios.post(`api/joblist/pullJob`, user).then((res) => {
      setJobData(res.data);
    });
  }

 

  return (
    <>
        <CoverLetterProvider>
        <CustomToneProvider>
          <JobDescProvider>
            <ResumeProvider>
              <main className="cards">
                <JobList fetchJobData={fetchJobData} jobData={jobData} />
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
                    <img
                      src="../../loading.gif"
                      alt="loading"
                    />
                  </div>
                ) : (
                  <div className="rhs-sections">
                    <CoverLetter fetchJobData={fetchJobData}/>
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
