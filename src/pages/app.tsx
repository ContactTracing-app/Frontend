import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/PrivateRoute';
import ContactView from '../views/contact';
import ProfileView from '../views/profile';
import LoginView from '../views/login';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <LoginView path="/login" />
        <PrivateRoute path="/contact" component={ContactView} />
        <PrivateRoute path="/profile" component={ProfileView} />
      </Router>
    </Layout>
  );
};

export default App;
