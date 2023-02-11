import React, {useEffect } from "react";
import JobListItem from "./JobListItem";
import CreateNewJobApp from "./buttons/CreateNewJobApp";

export default function JobList({ fetchJobData, jobData }) {

  useEffect(() => {
    fetchJobData();
  }, []);

  const individualJobListItem = jobData.map((jobApp) => (
    <JobListItem
      key={jobApp.id}
      jobTitle={jobApp.job_title}
      companyName={jobApp.company_name}
      coverLetterText={jobApp.cover_letter_text}
      jobDescText={jobApp.description}
      
    />
  ));
  return (
    <aside>
      <section>
        <h3> </h3>
      </section>
      <header className="aside-header">
        Your jobs

      </header>
      <p>View previous resumes, job descriptions and generated cover letters.</p>
      
      <section className="job-list">

        <section className="create-new-job"> 
        Create New
        <CreateNewJobApp/>
        </section>
        <br></br>
       
        {individualJobListItem}
      </section>
    </aside>
  );
}
