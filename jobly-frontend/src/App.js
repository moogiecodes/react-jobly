import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes'
import Navbar from './Navbar'
import JoblyApi from './JoblyApi';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {

    if (localStorage._token) {
      setUserLoggedIn(true)

      const getUser = async () => {
        let user = await JoblyApi.getUser(username);
        setCurrentUser(user);
      }
      getUser();
    }
    else setUserLoggedIn(false);

  }, [userLoggedIn, setUserLoggedIn, username, setUsername]);

console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        <Routes userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} setUsername={setUsername} currentUser={currentUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
