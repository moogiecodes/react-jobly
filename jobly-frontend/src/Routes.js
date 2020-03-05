import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './components/Homepage';
import CompanyDetails from './components/CompanyDetails';
import CompanyCardList from './components/CompanyCardList';
import JobCardList from './components/JobCardList';
import LoginForm from './components/LoginForm';

function Routes({ userLoggedIn, setUserLoggedIn }) {

  return (
    <Switch>
      <Route exact path="/">
        <Homepage userLoggedIn={userLoggedIn} />
      </Route>
      <Route exact path="/companies">
        <CompanyCardList listType="company" />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetails />
      </Route>
      <Route exact path="/jobs">
        <JobCardList listType="job" />
      </Route>
      <Route exact path="/login">
        <LoginForm setUserLoggedIn={setUserLoggedIn} />
      </Route>
      <Route exact path="/profile">
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;