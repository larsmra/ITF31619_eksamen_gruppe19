import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Office from '../pages/Office';

const Routes = () => (
  <Router>
    <PageLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/kontorer">
          <Offices />
        </Route>
        <Route path="/kontorer/:id">
          <Office />
        </Route>
        <Route path="/fagartikler">
          <Articles />
        </Route>
      </Switch>
    </PageLayout>
  </Router>
);

export default Routes;
