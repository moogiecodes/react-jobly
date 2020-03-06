import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem('_token');
    // console.log("PARAMS DATA ONLY", paramsOrData);
    console.log("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async searchCompanies(searchTerm) {
    let res = await this.request(`companies/?search=${searchTerm}`);
    return res.companies;
  }

  static async searchJobs(searchTerm) {
    let res = await this.request(`jobs/?search=${searchTerm}`);
    return res.jobs;
  }

  // figure out what to pass in from the form
  // POST TO BACKEND API, get token as response
  // store response in localStorage
  static async login(username, password) {
    // console.log("username", username, "password", password);
    let reqbody = {
      username,
      password
    }
    let res = await this.request('login', reqbody, 'post');
    let token = res.token;
    localStorage.setItem('_token', token);
  }

  static async register(username, password, firstname, lastname, email) {
    // console.log("username", username, "password", password, "firstname", firstname, "lastname", lastname, "email", email );
    let reqbody = {
      username,
      password,
      first_name: firstname,
      last_name: lastname,
      email
    }
    let res = await this.request('users', reqbody, 'post');
    let token = res.token;
    localStorage.setItem('_token', token);
  }

  static async getUser(username) {
    let reqbody = {
      "username": username
    }
    let res = await this.request(`users/${username}`, reqbody, 'get')
    return res.user;
  }

  static async updateUser(username, password, first_name, last_name, email, photo_url, _token) {
    // console.log("username", username, "password", password);
    let reqbody = {
      password,
      first_name,
      last_name,
      email,
      photo_url,
      _token
    }
    let res = await this.request(`users/${username}`, reqbody, 'patch');

    return res.user;

}
}

export default JoblyApi;