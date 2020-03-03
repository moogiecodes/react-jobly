import React from 'react';
import { NavLink } from "react-router-dom";
// import { v4 as uuid } from 'uuid';

function Homepage() {
  const userLoggedIn = true; // request from backend??


  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {userLoggedIn ?
        <NavLink exact to='/login'><button>Login</button></NavLink> :
        <h2>Welcome Back!</h2>}
    </div>
  );
}

export default Homepage;