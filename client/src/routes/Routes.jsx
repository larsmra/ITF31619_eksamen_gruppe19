import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { useAuthContext } from '../context/AuthProvider';

import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Office from '../pages/Office';
import Articles from '../pages/Articles';
import Article from '../pages/Article';
import CreateArticle from '../pages/CreateArticle';
import EditArticle from '../pages/EditArticle';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Forbidden from '../pages/Forbidden';
import Inquiries from '../pages/Inquiries';

const AdminRoute = ({ children, ...attrs }) => {
  const { isLoggedIn, isAdmin } = useAuthContext();
  return <Route {...attrs}>{isAdmin ? children : <Forbidden />}</Route>;
};

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
        <Route exact path="/fagartikler">
          <Articles />
        </Route>
        <Route exact path="/fagartikler/sider/:page">
          <Articles />
        </Route>
        <AdminRoute exact path="/fagartikler/ny">
          <CreateArticle />
        </AdminRoute>
        <Route exact path="/fagartikler/:id">
          <Article />
        </Route>
        <AdminRoute path="/fagartikler/:id/rediger">
          <EditArticle />
        </AdminRoute>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/henvendelser">
          <Inquiries />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </PageLayout>
  </Router>
);

export default Routes;
