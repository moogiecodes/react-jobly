import React from 'react';
import { useEffect, useState } from 'react';
// import '../styles/JobsList.css';
import JoblyApi from '../JoblyApi';
import JobCard from './JobCard';

function JobsList({ filteredJobs }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getData() {
      let jobData = await JoblyApi.request('jobs');
      setJobs(jobData.jobs);
    }
    getData();
  }, [setJobs]);


  return (
    <div>
      {(filteredJobs.length > 0) ?
        filteredJobs.map(j => <JobCard key={j.id} title={j.title} salary={j.salary} equity={j.equity} />) : jobs.map(j => <JobCard key={j.id} title={j.title} salary={j.salary} equity={j.equity} />)
      }
    </div>
  );
}


export default JobsList;

