import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import { useHistory } from 'react-router-dom';

function LoginForm({ setUserLoggedIn }) {

  const history = useHistory();
  const [loginOrRegister, setLoginOrRegister] = useState("login")

  const loginData = {
    login_username: "",
    login_password: ""
  };

  const registerData = {
    register_username: "",
    register_password: "",
    register_first_name: "",
    register_last_name: "",
    register_email: ""
  };

  const [formData, setFormData] = useState(loginData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }



 const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (loginOrRegister === "login") {
       await JoblyApi.login(formData.login_username, formData.login_password);
      setFormData(loginData);
      setUserLoggedIn(true);
      history.push('/jobs');
    }
    else if (loginOrRegister === "register") {
      // make JoblyApi.register method
      await JoblyApi.register(
        formData.register_username, 
        formData.register_password, 
        formData.register_first_name, 
        formData.register_last_name, 
        formData.register_email);
       
      setFormData(registerData);
      history.push('/jobs');
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
          <label htmlFor="login_username" >Username</label>
          <input
            name="login_username"
            id="login_username"
            value={formData.login_username}
            onChange={handleChange}></input>
          <label htmlFor="login_password">Password</label>
          <input
            name="login_password"
            id="login_password"
            value={formData.login_password}
            onChange={handleChange}></input>
          <button>Submit</button>
        </form>
        : null}
      {loginOrRegister === "register" ?
        <form onSubmit={handleSubmit} className="RegisterForm">
          <label htmlFor="register_username" >Username</label>
          <input
            name="register_username"
            id="register_username"
            value={formData.register_username}
            onChange={handleChange}></input>
          <label htmlFor="register_password">Password</label>
          <input
            name="register_password"
            id="register_password"
            value={formData.register_password}
            onChange={handleChange}></input>
          <label htmlFor="register_first_name">First Name</label>
          <input
            name="register_first_name"
            id="register_first_name"
            value={formData.register_first_name}
            onChange={handleChange}></input>
          <label htmlFor="register_last_name">Last Name</label>
          <input
            name="register_last_name"
            id="register_last_name"
            value={formData.register_last_name}
            onChange={handleChange}></input>
          <label htmlFor="register_email">Email</label>
          <input
            name="register_email"
            id="register_email"
            value={formData.register_email}
            onChange={handleChange}></input>
          <button>Submit</button>
        </form>
        : null}
    </div>
  );
}

export default LoginForm;