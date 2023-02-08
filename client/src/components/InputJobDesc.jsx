import React from "react";

import { useJobDescContext } from "../providers/JobDescProvider";

export default function InputJobDesc() {

  const {handleChangeJobTitle, handleChangeCompanyName, handleChangeJobDescText} = useJobDescContext();

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
