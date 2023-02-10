import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobListItem from './JobListItem';
import { useAuthContext } from 'providers/AuthProvider';

export default function JobList() {
  const { user } = useAuthContext();

  const [jobData, setJobData] = useState([]);
  //const responseFromAPI = [];

  useEffect(() => {
    axios.post(`api/joblist/pullJob`, user).then((res) => {
      //const data = res.data;
      setJobData(res.data);
    });
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
      <header className='aside-header'>
        <h3>Job List</h3>
        <button className='new-btn'>+</button>
      </header>
      <section>{individualJobListItem}</section>
    </aside>
  );
}
