import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobListItem from './JobListItem';

export default function JobList({fetchJobData, jobData}) {

  //const responseFromAPI = [];


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
      <header className='aside-header'>
        <h3>Job List</h3>
        <button className='new-btn'>+</button>
      </header>
      <section>{individualJobListItem}</section>
    </aside>
  );
}
