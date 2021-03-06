import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar({ userLoggedIn, setUserLoggedIn }) {

const handleLogout = () => {
  delete localStorage._token
  setUserLoggedIn(false);
} 


  if (userLoggedIn) {
    return (
      <nav className='NavBarClass'>
        <NavLink exact to='/'>Jobly</NavLink>
        <NavLink exact to='/companies'>Companies</NavLink>
        <NavLink exact to='/jobs'>Jobs</NavLink>
        <NavLink exact to='/profile'>Profile</NavLink>
        <NavLink onClick={handleLogout} exact to='/'>Logout</NavLink>
      </nav>
    );
  } else
    return (
      <nav className='NavBarClass'>
        <NavLink exact to='/'>Jobly</NavLink>
        <NavLink exact to='/login'>Login</NavLink>
      </nav>
    );
}

export default Navbar;