import React from 'react';
import { useEffect, useState } from 'react';
// import '../styles/JobsList.css';
import JoblyApi from '../JoblyApi';
import JobCard from './JobCard';

function JobsList({ filteredJobs }) {
  const [jobs, setJobs] = useState([]);

  console.log("IN JOBS LIST, FILTERED JOBS IS...", filteredJobs);
  /* At mount: load deck from API into state. */
  useEffect(() => {
    let reqBody = {
      "_token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30.COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U'
    }
    async function getData() {
      let jobData = await JoblyApi.request('jobs', reqBody, 'get');
      setJobs(jobData.jobs);
    }
    getData();
  }, [setJobs]);


  return (
    <div>
      {(filteredJobs.length > 0) ?
        filteredJobs.map(j =>  <JobCard key={j.id} title={j.title} salary={j.salary} equity={j.equity} />) : jobs.map(j => <JobCard key={j.id} title={j.title} salary={j.salary} equity={j.equity} />)
      }
    </div>
  );
}


export default JobsList;

