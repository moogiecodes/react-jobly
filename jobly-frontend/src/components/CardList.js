import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import SearchBar from './SearchBar';
import CompaniesList from './CompaniesList';
import JobsList from './JobsList';

function CardList({listType}) {
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  /* At mount: load deck from API into state. */
  

  const searchCompanies = data => {

    async function getData() {
      let res = await JoblyApi.searchCompanies(data.searchInput);
      setFilteredCompanies(res);
      console.log("RESPONSE IS....", res);
    }
    getData();

  }

  const searchJobs = data => {

    async function getData() {
      let res = await JoblyApi.searchJobs(data.searchInput);
      setFilteredJobs(res);
      console.log("RESPONSE IS....", res);
    }
    getData();

  }




  return (
    <div>
      <SearchBar searchCompanies={searchCompanies} searchJobs={searchJobs} listType={listType}/>

      {listType === "company" ? 
      <CompaniesList filteredCompanies={filteredCompanies} />
      : null
  }
      {listType === "job" ? 
      <JobsList filteredJobs={filteredJobs} />
      : null
    }
      </div>
  );
}

export default CardList;