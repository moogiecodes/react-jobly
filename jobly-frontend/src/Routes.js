import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './components/Homepage';
import CompaniesList from './components/CompaniesList';
import CompanyDetails from './components/CompanyDetails';

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        companies
        {/* <SearchBar /> */}
        <CompaniesList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetails />
        {/* <JobList /> */}
      </Route>
      <Route exact path="/jobs">
        jobs
        {/* <JobList /> */}
      </Route>
      <Route exact path="/login">
        login
        {/* <LoginForm /> */}
      </Route>
      <Route exact path="/profile">
        edit profile
        {/* <ProfileForm /> */}
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;