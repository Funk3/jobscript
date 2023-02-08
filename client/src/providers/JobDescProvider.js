// ??job title, company name
//definitely for description which will form part of query string

import { createContext, useState, useContext } from "react";

export const JobDescContext = createContext();

export function JobDescProvider(props) {
  
  
  const [jobTitle, setJobTitle] = useState();
  const handleChangeJobTitle = (newJobTitle) => {
    setJobTitle(newJobTitle);
  };

  const [companyName, setCompanyName] = useState();
  const handleChangeCompanyName = (newCompanyName) => {
    setCompanyName(newCompanyName);
  };

  const [jobDescText, setJobDescText] = useState();

  const handleChangeJobDescText = (newjobDescText) => {
    setJobDescText(newjobDescText);
  };

  const providerData = { jobTitle, handleChangeJobTitle, companyName, handleChangeCompanyName, jobDescText, handleChangeJobDescText};

  return (
    <JobDescContext.Provider value={providerData}>
      {props.children}
    </JobDescContext.Provider>
  );
}

export const useJobDescContext = () => useContext(JobDescContext);