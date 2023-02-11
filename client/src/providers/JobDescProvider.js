// provider for managing state of jobTitle, companyName and JobDescription.
// Also contains logic for fetching job data once cover letter has been added to db.

import { createContext, useState, useContext } from "react";
import { useAuthContext } from 'providers/AuthProvider';
import axios from "axios";

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
const [jobData, setJobData] = useState([]);
const { user } = useAuthContext();

const fetchJobData = () => {
  axios.post(`api/joblist/pullJob`, user).then((res) => {
    setJobData(res.data);
  });
}

  const providerData = { 
    jobTitle, 
    setJobTitle, 
    handleChangeJobTitle, 
    companyName, 
    setCompanyName,
    handleChangeCompanyName, 
    jobDescText, 
    setJobDescText, 
    handleChangeJobDescText, 
    jobData,
    setJobData,
    fetchJobData
  };

  return (
    <JobDescContext.Provider value={providerData}>
      {props.children}
    </JobDescContext.Provider>
  );
}

export const useJobDescContext = () => useContext(JobDescContext);