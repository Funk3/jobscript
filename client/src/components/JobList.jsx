import React from "react"
import axios from 'axios'
import JobListItem from "./JobListItem"
import { useAuthContext } from 'providers/AuthProvider'

export default function JobList() {

  const { user } = useAuthContext();

  //Need helper function getExistingJobApps that returns and array of job_app objects {title: "Jr Web Dev", company_name:"Google"}
  // const listOfExistingJobApps = getExistingJobApps()

  // const individualJobListItem = listOfExistingJobApps.map((jobApp) => (
  //   <JobListItem
  //     jobTitle={jobApp.title}
  //     companyName={jobApp.company_name}
  //   />
  // ));

  axios.post(`api/joblist/pull`, user).then(res => {
    console.log(res.data)
    // const listOfExistingJobApps = res.data
    // const individualJobListItem = listOfExistingJobApps.map((jobApp) => (
    //   <JobListItem
    //     jobTitle={jobApp.title}
    //     companyName={jobApp.company_name}
    //   />
    // ));
  })
  return (
    <aside>
      <header className="aside-header">
        <h3>Job List</h3>
        <button>+</button>
        <p>userid = {user.id}</p>
      </header>
      <article>{/*render individualJobListItems here */}
        <JobListItem />
      </article>
    </aside>
  );
}