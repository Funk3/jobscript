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
      <h3>2. Submit Job Details</h3>
      <form className="job-desc">
        <label>
          Job Title
          <input
            onChange={(event) => handleChangeJobTitle(event.target.value)}
            value={jobTitle}
            placeholder="Copy paste the Job Title"
            type="text"
            name="job-title"
          ></input>
        </label>

        <label>
          Company Name
          <input
            onChange={(event) => handleChangeCompanyName(event.target.value)}
            value={companyName}
            placeholder="Copy paste the Company Name"
            type="text"
            name="company-name"
          ></input>
        </label>

        <label>
          Job Description
          <textarea
            onChange={(event) => handleChangeJobDescText(event.target.value)}
            defaultValue={jobDescText}
            placeholder="Copy paste the Job Description"
          ></textarea>
        </label>
      </form>
    </section>
  );
}
