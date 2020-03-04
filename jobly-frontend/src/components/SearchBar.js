import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from '../JoblyApi';
import CompanyCard from './CompanyCard';

function SearchBar() {
  const history = useHistory();
  const INITIAL_STATE = {
    searchInput: ""
  }
  const [searchBarData, setSearchBarData] = useState(INITIAL_STATE);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  // handles on keystroke from user
  const handleChange = e => {
    const { name, value } = e.target;
    setSearchBarData(sData => ({
      ...sData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    searchCompanies(searchBarData);
    console.log("SEARCH BAR DATA IS...", searchBarData);
    setSearchBarData(INITIAL_STATE);
    history.push('/companies');
  }

  /* At mount: load deck from API into state. */
  const searchCompanies = data => {

    async function getData() {
      let res = await JoblyApi.search(data.searchInput);
      setFilteredCompanies(res);
      console.log("RESPONSE IS....", res);
    }
    getData();

  }

  // useEffect(() => {
  //   // mocking
  //   let searchTerm = 'baker';

  // }, [setSearchedCompanies]);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='searchInput'>Search</label>
        <input id='searchInput' name='searchInput' onChange={handleChange} placeholder='Enter search term...'></input>
        <button>Submit</button>
      </form>
      {(filteredCompanies.length === 0) ? null :
        filteredCompanies.map(c => <CompanyCard key={c.handle} name={c.name} description={c.description} handle={c.handle} />)
      }
    </div>
  );
}

export default SearchBar;