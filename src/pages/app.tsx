import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/PrivateRoute';
import LogView from '../app/LogView';
import ProfileView from '../app/ProfileView';
import LoginView from '../app/LoginView';
import ContactsView from '../app/ContactsView';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <LoginView path="/login" />
        <PrivateRoute path="/contacts" component={ContactsView} />
        <PrivateRoute path="/log" component={LogView} />
        <PrivateRoute path="/profile/:uid" component={ProfileView} />
      </Router>
    </Layout>
  );
};

export default App;
