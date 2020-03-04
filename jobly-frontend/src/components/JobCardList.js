import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import SearchBar from './SearchBar';
import JobsList from './JobsList';

function JobCardList({listType}) {
  const [filteredJobs, setFilteredJobs] = useState([]);

  const searchJobs = data => {

    async function getData() {
      let res = await JoblyApi.searchJobs(data.searchInput);
      setFilteredJobs(res);
    }
    getData();

  }

  return (
    <div>
      <SearchBar searchJobs={searchJobs} listType={listType}/>
      <JobsList filteredJobs={filteredJobs} />
      </div>
  );
}

export default JobCardList;