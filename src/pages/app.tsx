import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/PrivateRoute';
import LogView from '../app/LogView';
import ProfileView from '../app/ProfileView';
import LoginView from '../app/LoginView';
import ContactsView from '../app/ContactsView';
import InviteView from '../app/InviteView';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <LoginView path="/login" />
        <InviteView path="/invite/:uid" />
        <PrivateRoute path="/contacts" component={ContactsView} />
        <PrivateRoute path="/log" component={LogView} />
        <PrivateRoute path="/profile" component={ProfileView} />
      </Router>
    </Layout>
  );
};

export default App;
