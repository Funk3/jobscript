// provider for managing state of jobTitle, companyName and JobDescription.
// Also contains logic for fetching job data once cover letter has been added to db.

import { createContext, useState, useContext } from "react";

export const JobDescContext = createContext();

export function JobDescProvider(props) {
  
  
  const [jobTitle, setJobTitle] = useState("");
  const handleChangeJobTitle = (newJobTitle) => {
    setJobTitle(newJobTitle);
  };

  const [companyName, setCompanyName] = useState("");
  const handleChangeCompanyName = (newCompanyName) => {
    setCompanyName(newCompanyName);
  };

  const [jobDescText, setJobDescText] = useState("");
  const handleChangeJobDescText = (newjobDescText) => {
    setJobDescText(newjobDescText);
  };

//move fetchJobData logic into here 


  const providerData = { jobTitle, handleChangeJobTitle, companyName, handleChangeCompanyName, jobDescText, handleChangeJobDescText, setJobDescText, setJobTitle, setCompanyName};

  return (
    <JobDescContext.Provider value={providerData}>
      {props.children}
    </JobDescContext.Provider>
  );
}

export const useJobDescContext = () => useContext(JobDescContext);