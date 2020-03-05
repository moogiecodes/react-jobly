import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const history = useHistory();
  const initialData = {
    username: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    JoblyApi.login(formData.username, formData.password);
    setFormData(initialData);
    history.push('/jobs');
  }
  console.log(formData)

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <label htmlFor="username" >Username</label>
      <input name="username" id="username" value={FormData.username} onChange={handleChange}></input>
      <label htmlFor="passoword">Password</label>
      <input name="password" id="password" value={FormData.password} onChange={handleChange}></input>
      <button>Submit</button>
    </form>
  )
}

export default LoginForm;