import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/PrivateRoute';
import LogView from '../views/log';
import ProfileView from '../views/profile';
import LoginView from '../views/login';
import ConnectionsView from '../views/connections';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <LoginView path="/login" />
        <PrivateRoute path="/connections" component={ConnectionsView} />
        <PrivateRoute path="/log" component={LogView} />
        <PrivateRoute path="/profile/:uid" component={ProfileView} />
      </Router>
    </Layout>
  );
};

export default App;
