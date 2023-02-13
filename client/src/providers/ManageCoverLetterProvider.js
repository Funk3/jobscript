import React, { useState, useContext, createContext } from "react";

import { useAuthContext } from 'providers/AuthProvider';
import { useCoverLetterContext } from 'providers/CoverLetterProvider';
import { useResumeContext } from 'providers/ResumeProvider';
import { useJobDescContext } from 'providers/JobDescProvider';

import classnames from 'classnames';
import axios from 'axios';

export const ManageCoverLetterContext = createContext();

export function ManageCoverLetterProvider(props) {

  const { user } = useAuthContext();
  const { uploadedFile } = useResumeContext();
  const { jobTitle, companyName, jobDescText, fetchJobData } =
    useJobDescContext();
  const { coverLetterText } = useCoverLetterContext();


  //Save
  const [saveSuccess, setSaveSuccessState] = useState(false);
  const [saveFailure, setSaveFailureState] = useState(false);

  const saveStateClass = classnames('save', {
    'save-success': saveSuccess,
    'save-failure': saveFailure,
  });

  const handleSave = () => {
    const jobDataSave = {
      id: user.id,
      jobTitle,
      companyName,
      jobDescText,
      coverLetterText,
      uploadedFile,
    };

    axios
      .post('api/joblist/addJobDesc', jobDataSave)
      .then((result) => {
        //to re-render loblist item list with newest addition added to the bottom
        fetchJobData();
        setSaveSuccessState('Cover Letter saved successfully.');
      })
      .catch((error) => {
        setSaveFailureState(
          `Unable to save Cover Letter. \n Error message: ${error}.`
        );
      });
  };



  //Copy
  const [copySuccess, setCopySuccessState] = useState(false);
  const copyStateClass = classnames('copy', {
    'copy-success': copySuccess,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetterText);
    setCopySuccessState('Cover Letter copied to clipboard.');
  };

  const providerData = {
    saveSuccess, 
    setSaveSuccessState,
    saveFailure, 
    setSaveFailureState,
    saveStateClass, 
    handleSave, 
    copySuccess,
    setCopySuccessState,
    copyStateClass, 
    handleCopy, 
  };

  return (
    <ManageCoverLetterContext.Provider value={providerData}>
      {props.children}
    </ManageCoverLetterContext.Provider>
  );
}

export const useManageCoverLetterContext = () => useContext(ManageCoverLetterContext);
