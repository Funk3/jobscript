import React from "react"
import JobListItem from "./JobListItem"
import { useAuthContext } from '../providers/AuthProvider';

export default function JobList(){

  const {user} = useAuthContext();

//Need helper function getExistingJobApps that returns and array of job_app objects {title: "Jr Web Dev", company_name:"Google"}
// listOfExistingJobApps = getExistingJobApps()

/* const individualJobListItem = listOfExistingJobApps.map((jobApp) => (
  <JobListItem
    jobTitle={jobApp.title}
    companyName={jobApp.company_name}
    />
)); */

  return (
    <aside>
      <header className="aside-header">
      <h3>Job List</h3>
      <button>+</button>
      </header>
      <article>{/*render individualJobListItems here */}
        <JobListItem />
      </article>
    </aside>
  )
}