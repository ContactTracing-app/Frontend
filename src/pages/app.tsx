import React from 'react';
import { Router } from '@reach/router';
import ContactsView from '../app/ContactsView';
import InviteView from '../app/InviteView';
import Layout from '../components/layout';
import ProfileView from '../app/ProfileView';
import LoginView from '../app/LoginView';
import LogView from '../app/LogView';
import PrivateRoute from '../components/PrivateRoute';
import SettingsView from '../app/SettingsView';
import ShareView from '../app/ShareView';
import TestView from '../app/TestView';
import TestView2 from '../app/TestView/TestView2';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <LoginView path="/login" />
        <InviteView path="/invite/:uid" />
        <PrivateRoute path="/contacts" component={ContactsView} />
        <PrivateRoute path="/profile" component={ProfileView} />
        <PrivateRoute path="/log" component={LogView} />
        <PrivateRoute path="/share" component={ShareView} />
        <PrivateRoute path="/settings" component={SettingsView} />
        <PrivateRoute path="/test" component={TestView} />
        <PrivateRoute path="/test2" component={TestView2} />
      </Router>
    </Layout>
  );
};

export default App;
