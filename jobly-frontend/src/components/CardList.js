import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import SearchBar from './SearchBar';
import CompaniesList from './CompaniesList';

function CardList() {
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  /* At mount: load deck from API into state. */
  const searchCompanies = data => {

    async function getData() {
      let res = await JoblyApi.search(data.searchInput);
      setFilteredCompanies(res);
      console.log("RESPONSE IS....", res);
    }
    getData();

  }


  return (
    <div>
      <SearchBar searchCompanies={searchCompanies} />
      <CompaniesList filteredCompanies={filteredCompanies} />
    </div>
  );
}

export default CardList;