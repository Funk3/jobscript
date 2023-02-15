import {useEffect } from "react";
import JobListItem from "./JobListItem";
import CreateNewJobApp from "./buttons/CreateNewJobApp";
import { useJobDescContext } from "providers/JobDescProvider";

export default function JobList() {

  const {fetchJobData, jobData} = useJobDescContext();
  
  //Re-renders job List Item to include newest addition after user clicks save
    useEffect(() => {
    fetchJobData();
  }, []);

  //Creates a component for each instance of a job application to render the list
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
