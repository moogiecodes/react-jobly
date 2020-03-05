import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/CompaniesList.css';
import JoblyApi from '../JoblyApi';
import CompanyCard from './CompanyCard';

function CompaniesList({ filteredCompanies }) {
  const [companies, setCompanies] = useState([]);

  /* At mount: load deck from API into state. */
  useEffect(() => {
    async function getData() {
      let companyData = await JoblyApi.request('companies');
      setCompanies(companyData.companies);
    }
    getData();
  }, [setCompanies]);


  return (
    <div>
      {(filteredCompanies.length > 0) ?
        filteredCompanies.map(c => <CompanyCard key={c.handle} name={c.name} description={c.description} handle={c.handle} />) : companies.map(c => <CompanyCard key={c.handle} name={c.name} description={c.description} handle={c.handle} />)
      }
    </div>
  );
}


export default CompaniesList;