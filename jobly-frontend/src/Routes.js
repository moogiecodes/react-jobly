import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './components/Homepage';
import CompanyDetails from './components/CompanyDetails';
import CompanyCardList from './components/CompanyCardList';
import JobCardList from './components/JobCardList';

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <CompanyCardList listType="company"/>
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetails />
        {/* <JobList /> */}
      </Route>
      <Route exact path="/jobs">
        <JobCardList listType="job"/>
        {/* <CardList /> */}
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