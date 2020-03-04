import React, {useEffect, useState } from 'react';
import JobList from './JobList';
import { useParams } from 'react-router-dom';
import JoblyApi from '../JoblyApi';

function CompanyDetails() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

console.log(useParams());

useEffect(() => {
  let reqBody = {
    "_token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30.COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U'
  }
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
    </div>
    : <h1>Company Details...</h1>}
  </div>
)

}


export default CompanyDetails;