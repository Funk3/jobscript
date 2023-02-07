import React from "react";

export default function InputJobDesc() {


  
  return (
    <section>
      <h3>Job Description</h3>
      <form>
        <input placeholder="Job Title" type="text" name="job-title"></input>
        <br></br>
        <input
          placeholder="Company Name" type="text" name="company-name"></input>
        <br></br>
        <textarea placeholder="Copy and paste the job description here" rows="5" cols="33"></textarea>
      </form>
    </section>
  );
}
