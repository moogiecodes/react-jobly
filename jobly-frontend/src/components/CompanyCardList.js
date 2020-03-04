import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import SearchBar from './SearchBar';
import CompaniesList from './CompaniesList';
import JobsList from './JobsList';

function CompanyCardList({listType}) {
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const searchCompanies = data => {

    async function getData() {
      let res = await JoblyApi.searchCompanies(data.searchInput);
      setFilteredCompanies(res);
    }
    getData();

  }

  return (
    <div>
      <SearchBar searchCompanies={searchCompanies} listType={listType}/> 
      <CompaniesList filteredCompanies={filteredCompanies} />
      </div>
  );
}

export default CompanyCardList;
