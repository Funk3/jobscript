import { useAuthContext } from "providers/AuthProvider";
import { useCoverLetterContext } from "providers/CoverLetterProvider";
import { useResumeContext } from "providers/ResumeProvider";
import { useJobDescContext } from "providers/JobDescProvider";

import React from "react";
import axios from "axios";

export default function Save({ fetchJobData }) {
  const { user } = useAuthContext();
  const { uploadedFile } = useResumeContext();
  const { jobTitle, companyName, jobDescText } = useJobDescContext();
  const { coverLetterText } = useCoverLetterContext();

  const handleSave = () => {
    console.log("save clicked");
    //not rerendering page.

    const jobData = {
      id: user.id,
      jobTitle,
      companyName,
      jobDescText,
      coverLetterText,
      uploadedFile,
    };

    axios.post('api/joblist/addJobDesc', jobData).then((result) => {
      //Create an alert of save confirmation
      console.log('Data Sent');
      fetchJobData();
    });
  };
  return <button onClick={handleSave}>Save</button>;
}
