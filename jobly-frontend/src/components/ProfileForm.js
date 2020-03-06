import React, { useState } from 'react';
import JoblyApi from '../JoblyApi';
import { useHistory } from 'react-router-dom';

//prefill form with current user info
//disable username from being able to change
//have field to enter password to submit changes


function ProfileForm({ currentUser }) {
  const { username, first_name, last_name, email, photo_url } = currentUser

  const userData = {
    ProfileForm_username : username,
    ProfileForm_first_name : first_name,
    ProfileForm_last_name : last_name,
    ProfileForm_email : email,
    ProfileForm_photo_url : photo_url,
    ProfileForm_password: ""
  };

  const [formData, setFormData] = useState(userData);
  console.log(formData);


  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }


  const handleSubmit = async (evt) => {
    evt.preventDefault();

    formData.ProfileForm_photo_url = formData.ProfileForm_photo_url || "https://avatars0.githubusercontent.com/u/13444851?s=460&v=4";  

    const resp = await JoblyApi.updateUser(formData.ProfileForm_username, formData.ProfileForm_password, formData.ProfileForm_first_name, formData.ProfileForm_last_name, formData.ProfileForm_email, formData.ProfileForm_photo_url, localStorage._token);

    console.log(resp);
  
    // setFormData(loginData);
    // setUserLoggedIn(true);
    // console.log("in handle submit for login");
    // setUsername(formData.login_username);

    // history.push('/jobs');
  }

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} className="ProfileForm">
        <label htmlFor="ProfileForm_username" >Username</label>
        <p>{username}</p>

        <label htmlFor="ProfileForm_first_name">First Name</label>
        <input
          name="ProfileForm_first_name"
          id="ProfileForm_first_name"
          value={formData.ProfileForm_first_name}
          onChange={handleChange}></input>

        <label htmlFor="ProfileForm_last_name">Last Name</label>
        <input
          name="ProfileForm_last_name"
          id="ProfileForm_last_name"
          value={formData.ProfileForm_last_name}
          onChange={handleChange}></input>

        <label htmlFor="ProfileForm_email">Email</label>
        <input
          name="ProfileForm_email"
          id="ProfileForm_email"
          value={formData.ProfileForm_email}
          onChange={handleChange}></input>

        <label htmlFor="ProfileForm_photo_url">Photo URL</label>
        <input
          name="ProfileForm_photo_url"
          id="ProfileForm_photo_url"
          value={formData.ProfileForm_photo_url}
          onChange={handleChange}></input>


        <label htmlFor="ProfileForm_password">Re-enter Password</label>
        <input
          name="ProfileForm_password"
          id="ProfileForm_password"
          value={formData.ProfileForm_password}
          onChange={handleChange}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}



export default ProfileForm;