import React from "react"
import axios from 'axios'
import JobListItem from "./JobListItem"
import { useAuthContext } from 'providers/AuthProvider'

export default function JobList() {

  const { user } = useAuthContext();

  //Need helper function getExistingJobApps that returns and array of job_app objects {title: "Jr Web Dev", company_name:"Google"}

  // const individualJobListItem = listOfExistingJobApps.map((jobApp) => (
  //   <JobListItem
  //     jobTitle={jobApp.title}
  //     companyName={jobApp.company_name}
  //   />
  // ));
  const stuff = [];

  axios.post(`api/joblist/pull`, user).then(res => {
    console.log(res.data)
    const data = res.data
    stuff.push(data);
  })
  console.log('stuff', stuff)

  const individualJobListItem = stuff.map((jobApp) => (
    <JobListItem
      jobTitle={jobApp.title}
      companyName={jobApp.company_name}
    />
  ));
  return (
    <aside>
      <header className="aside-header">
        <h3>Job List</h3>
        <button>+</button>
        <p>userid = {user.id}</p>
      </header>
      <article>{individualJobListItem}

      </article>
    </aside>
  );
}