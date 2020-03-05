import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import { useHistory } from 'react-router-dom';

function LoginForm() {

  const history = useHistory();
  const [loginOrRegister, setLoginOrRegister] = useState("login")

  const loginData = {
    username: "",
    password: ""
  };

  const registerData = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  };

  const [formData, setFormData] = useState(loginData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    if (loginOrRegister === "login") {
      JoblyApi.login(formData.username, formData.password);
      setFormData(loginData);
      history.push('/jobs');
    }
    else if (loginOrRegister === "register") {
      // make JoblyApi.register method

    }
  }

  const loginView = () => {
    setLoginOrRegister("login");
    setFormData(loginData);
  }
  const registerView = () => {
    setLoginOrRegister("register");
    setFormData(registerData);
  }

  return (
    <div>
      <button onClick={loginView}>Login</button>
      <button onClick={registerView}>Register</button>
      {loginOrRegister === "login" ?
        <form onSubmit={handleSubmit} className="LoginForm">
          <label htmlFor="username" >Username</label>
          <input
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}></input>
          <label htmlFor="passoword">Password</label>
          <input
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}></input>
          <button>Submit</button>
        </form>
        : null}
      {loginOrRegister === "register" ?
        <form onSubmit={handleSubmit} className="RegisterForm">
          <label htmlFor="username" >Username</label>
          <input
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}></input>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}></input>
          <label htmlFor="first_name">First Name</label>
          <input
            name="first_name"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}></input>
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}></input>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}></input>
          <button>Submit</button>
        </form>
        : null}
    </div>
  );
}

export default LoginForm;