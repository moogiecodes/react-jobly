import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../JoblyApi';
import JobCard from './JobCard';

function CompanyDetails() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  console.log(useParams());

  useEffect(() => {
    async function getData() {
      let companyData = await JoblyApi.getCompany(`${handle}`);
      setCompany(companyData);
      console.log(companyData);
    }
    getData();
  }, [setCompany, handle]);

  return (
    <div>
      {company ?
        <div>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
          <p>Number of Employees: {company.num_employees}</p>
          {company.jobs.map(j => <JobCard key={j.id} title={j.title} salary={j.salary} equity={j.equity} />)}
        </div>
        : <h1>Company Details...</h1>}
    </div>
  )

}


export default CompanyDetails;