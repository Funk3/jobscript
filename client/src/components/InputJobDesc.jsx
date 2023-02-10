import React from "react";

import { useJobDescContext } from "../providers/JobDescProvider";

export default function InputJobDesc() {
  const {
    jobTitle,
    handleChangeJobTitle,
    companyName,
    handleChangeCompanyName,
    jobDescText,
    handleChangeJobDescText,
  } = useJobDescContext();

  return (
    <section>
      <h1>Job Description</h1>
      <form className="job-desc">
        <input
          onChange={(event) => handleChangeJobTitle(event.target.value)}
          value={jobTitle}
          placeholder="Job Title"
          type="text"
          name="job-title"
        ></input>
        <br></br>
        <input
          onChange={(event) => handleChangeCompanyName(event.target.value)}
          value={companyName}
          placeholder="Company Name"
          type="text"
          name="company-name"
        ></input>
        </form>
        <textarea
          onChange={(event) => handleChangeJobDescText(event.target.value)}
          defaultValue={jobDescText}
          placeholder="Copy and paste the job description here"
          rows="5"
          cols="33"
        ></textarea>
    </section>
  );
}
