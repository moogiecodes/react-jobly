import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/CompaniesList.css';
// import { v4 as uuid } from 'uuid';
import JoblyApi from '../JoblyApi';
import CompanyCard from './CompanyCard';

function CompaniesList() {
  const [companies, setCompanies] = useState([]);

  /* At mount: load deck from API into state. */
  useEffect(() => {
    let reqBody = {
      "_token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30.COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U'
    }
    async function getData() {
      let companyData = await JoblyApi.request('companies', reqBody, 'get');
      setCompanies(companyData.companies);
    }
    getData();
  }, [setCompanies]);

  // console.log(companies.companies);

  // ** ADD COMPANYCARD COMPONENT WHEN WORKING
  return (
    <div>
      {(companies.length === 0) ? <h2>Companies Directory</h2> :
        companies.map(c => <CompanyCard key={c.handle} name={c.name} description={c.description} handle={c.handle} />)
      }
    </div>
  );
}

export default CompaniesList;