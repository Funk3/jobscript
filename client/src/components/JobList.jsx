import React, { useState , useEffect} from "react";
import axios from "axios";
import JobListItem from "./JobListItem";
import { useAuthContext } from "providers/AuthProvider";

export default function JobList() {
  const { user } = useAuthContext();

  const [ jobData, setJobData] = useState([]);
  //const responseFromAPI = [];

  useEffect(() => {
    axios.post(`api/joblist/pull`, user).then((res) => {
      console.log("res.data", res.data)
      //const data = res.data;
      setJobData(res.data)
    });
  }, [])
  
  console.log("jobData", jobData);

  const individualJobListItem = jobData.map((jobApp) => (
    <JobListItem
      key={jobApp.id}
      jobTitle={jobApp.job_title}
      companyName={jobApp.company_name}
      coverLetterText={jobApp.cover_letter_text}
    />
  ));
  return (
    <aside>
      <header className="aside-header">
        <h3>Job List</h3>
        <button className="new-btn" >+</button>
      </header>
      <section>
       {individualJobListItem}
      </section>
    </aside>
  );
}
