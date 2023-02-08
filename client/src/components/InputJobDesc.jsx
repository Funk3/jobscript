import React, {useContext} from "react";

import { JobDescContext } from "../providers/JobDescProvider";

export default function InputJobDesc() {

  const {jobTitle, handleChangeJobTitle, companyName, handleChangeCompanyName, jobDescText, handleChangeJobDescText} = useContext(JobDescContext);

  return (
    <section>
      <h3>Job Description</h3>
      <form>
        <input onChange={(event) => handleChangeJobTitle(event.target.value)} placeholder="Job Title" type="text" name="job-title"></input>
        <br></br>
        <input onChange={(event) => handleChangeCompanyName(event.target.value)}
          placeholder="Company Name" type="text" name="company-name"></input>
        <br></br>
        <textarea onChange={(event) => handleChangeJobDescText(event.target.value)}placeholder="Copy and paste the job description here" rows="5" cols="33"></textarea>
      </form>
    </section>
  );
}
