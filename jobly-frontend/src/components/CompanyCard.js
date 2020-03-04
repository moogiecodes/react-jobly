import React from 'react';

function CompanyCard({name, description, handle}) {

return (
  <a href={`/companies/${handle}`}>
  <div className="CompanyCard-card">
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
  </a>
)
}

export default CompanyCard;