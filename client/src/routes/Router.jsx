import React from 'react';
import { BrowserRoute as Router, Switch, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

import Home from '../pages/home';
import Offices from '../pages/offices';
import Plumbers from '../pages/plumbers';

const Routes = () => (
  <Router>
    <PageLayout>
      <Switch>
        <Route exact path="/" component={<Home />} />
        <Route path="/kontorer" component={<Offices />} />
        <Route path="/kontorer/:id" component={<Plumbers />} />
      </Switch>
    </PageLayout>
  </Router>
);

export default Routes;
