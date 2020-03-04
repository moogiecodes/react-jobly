import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/**Future Fix:
 *  IF SEARCHING WITH NO MATCH, no feedback to user, just shows all companies
 */

function SearchBar({ searchCompanies }) {
  const history = useHistory();
  const INITIAL_STATE = {
    searchInput: ""
  }
  const [searchBarData, setSearchBarData] = useState(INITIAL_STATE);

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
    if (searchBarData.searchInput.length > 0) {
      searchCompanies(searchBarData);
      console.log("SEARCH BAR DATA IS...", searchBarData);
      setSearchBarData(INITIAL_STATE);
      history.push('/companies');
    }
    searchCompanies(searchBarData);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='searchInput'>Search</label>
        <input id='searchInput' name='searchInput' onChange={handleChange} placeholder='Enter search term...'></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;