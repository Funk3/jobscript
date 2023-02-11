import { useAuthContext } from "providers/AuthProvider";
import { useCoverLetterContext } from "providers/CoverLetterProvider";
import { useResumeContext } from "providers/ResumeProvider";
import { useJobDescContext } from "providers/JobDescProvider";

import React, { useState } from "react";
import classnames from "classnames";
import axios from "axios";

export default function Save() {
  const { user } = useAuthContext();
  const { uploadedFile } = useResumeContext();
  const { jobTitle, companyName, jobDescText, fetchJobData } =
    useJobDescContext();
  const { coverLetterText } = useCoverLetterContext();
  const [saveSuccess, setSaveSuccessState] = useState(false);
  const [saveFailure, setSaveFailureState] = useState(false);

  const saveStateClass = classnames("save", {
    "save-success": saveSuccess,
    "save-failure": saveFailure,
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
      .post("api/joblist/addJobDesc", jobDataSave)
      .then((result) => {
        console.log("save result=", result);
        //to re-render loblist item list with newest addition added to the bottom
        fetchJobData();
        setSaveSuccessState("Cover Letter saved successfully.");
      })  
      .catch((error) => {
        setSaveFailureState(
          `Unable to save Cover Letter. \n Error message: ${error}.`
        );
      });
  };
  return (
    <>
    {saveSuccess ?
     <p className={saveStateClass}>{saveSuccess}</p>
    :
    <p className={saveStateClass}>{saveFailure}</p>
    }
      <button onClick={handleSave}>Save</button>
    </>
  );
}
