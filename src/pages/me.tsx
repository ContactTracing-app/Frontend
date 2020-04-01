import * as React from 'react';
import { Router } from '@reach/router';
import { useIntl } from 'gatsby-plugin-intl';
import ContactsView from '../app/ContactsView';
import InviteView from '../app/InviteView';
import Layout from '../components/layout';
import ProfileView from '../app/ProfileView';
import SigninView from '../app/SigninView';
import LogView from '../app/LogView';
import PrivateRoute from '../components/PrivateRoute';
import SettingsView from '../app/SettingsView';
import ShareView from '../app/ShareView';

const Me: React.FC = () => {
  const { locale } = useIntl();
  return (
    <Layout>
      <Router basepath={`/${locale}/me`}>
        <SigninView path="/sign-in" />
        <InviteView path="/invite/:uid" />
        <PrivateRoute path="/" component={ProfileView} />
        <PrivateRoute path="/contacts" component={ContactsView} />
        <PrivateRoute path="/log" component={LogView} />
        <PrivateRoute path="/share" component={ShareView} />
        <PrivateRoute path="/settings" component={SettingsView} />
      </Router>
    </Layout>
  );
};

export default Me;
