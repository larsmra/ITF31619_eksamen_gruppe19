import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Plumbers from '../pages/Plumbers';

const Routes = () => (
  <Router>
    <PageLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/kontorer">
          <Offices />
        </Route>
        <Route path="/kontorer/:id">
          <Plumbers />
        </Route>
      </Switch>
    </PageLayout>
  </Router>
);

export default Routes;
