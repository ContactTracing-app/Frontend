import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/PrivateRoute';
import LogView from '../views/log';
import ShareView from '../views/share';
import LoginView from '../views/login';
import KnowsView from '../views/knows';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <LoginView path="/login" />
        <PrivateRoute path="/knows" component={KnowsView} />
        <PrivateRoute path="/log" component={LogView} />
        <PrivateRoute path="/share/:uid" component={ShareView} />\
      </Router>
    </Layout>
  );
};

export default App;
