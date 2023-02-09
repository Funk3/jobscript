import { useAuthContext } from "providers/AuthProvider";
import { useCoverLetterContext } from "providers/CoverLetterProvider";
import { useResumeContext } from "providers/ResumeProvider";
import React from "react";
import axios from "axios";

export default function Save() {
  const { user } = useAuthContext();
  const { uploadedFile } = useResumeContext();
  const { jobTitle, companyName, jobDescText } = useResumeContext();
  const { coverLetterText } = useCoverLetterContext();

  //save needs to access user id, resume, job title, company name, job text, coverletter text,
  // db/queries/resume
  //addResumeByUser(user.id, uploadedFile)

  //db/queries/job_description
  //addjobDescByUser(user.id, jobTitle, companyName, jobDescText, coverLetterText)
   

  return <button>Save</button>;
}
