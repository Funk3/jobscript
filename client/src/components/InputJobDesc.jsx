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
      <h3>2. Copy and Paste Job Details</h3>
      <form className="job-desc">
        <label>
        <strong>Job Title</strong>
          <br></br>
          <input
            onChange={(event) => handleChangeJobTitle(event.target.value)}
            value={jobTitle}
            placeholder="Job Title"
            type="text"
            name="job-title"
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          <strong>Company Name</strong>
          <br></br>
        <input
          onChange={(event) => handleChangeCompanyName(event.target.value)}
          value={companyName}
          placeholder="Company Name"
          type="text"
          name="company-name"
        ></input>
        </label>
        </form>
        <br></br>
        <br></br>
        <label>
          <strong>Job Description</strong>
         
        <textarea
          onChange={(event) => handleChangeJobDescText(event.target.value)}
          defaultValue={jobDescText}
          placeholder="Copy and paste the job description here"
          rows="5"
          cols="33"
          ></textarea>
        </label>
          
    </section>
  );
}
