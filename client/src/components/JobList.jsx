import React from "react"
import JobListItem from "./JobListItem"
import Button from "./Button"


export default function JobList(){

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
      <Button>+</Button>
      </header>
      <article>{/*render individualJobListItems here */}
        <JobListItem />
      </article>
    </aside>
  )
}