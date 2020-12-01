import React from 'react';
import { BrowserRoute as Router, Switch, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

const Routes = () => (
  <Router>
    <PageLayout>{/* Pages here */}</PageLayout>
  </Router>
);

export default Routes;
