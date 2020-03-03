import React from 'react';
import { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import { v4 as uuid } from 'uuid';
import JoblyApi from '../JoblyApi'

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
      <ul>
        {(companies.length === 0) ? <h2>Companies Directory</h2> :
          companies.map(c => <li key={c.handle}>{c.name}</li>)
        }
      </ul>
    </div>
  );
}

export default CompaniesList;