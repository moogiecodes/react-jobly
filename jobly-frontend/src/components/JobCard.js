import React, { useEffect, useState } from 'react';
import JoblyApi from '../JoblyApi';

function JobCard({ title, salary, equity }) {

  const handleClick = () => {

    //state for application button?
  }

  return (
    <div>
      <p>{title}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onclick={handleClick}>Apply</button>
    </div>
  );
}

export default JobCard;