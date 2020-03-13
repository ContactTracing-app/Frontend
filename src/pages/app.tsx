import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/PrivateRoute';
import ContactView from '../views/contact';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/contact" component={ContactView} />
      </Router>
    </Layout>
  );
};

export default App;
