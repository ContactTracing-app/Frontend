import * as React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';
import { RouteComponentProps, useLocation } from '@reach/router';

import { navigate } from 'gatsby';
import PageHeader from '../../components/PageHeader';

const LoginView: React.FC<RouteComponentProps> = () => {
  const { state } = useLocation();
  return (
    <>
      <PageHeader
        heading="Log in"
        lead="Get started by logging-in to your account."
      />
      <FormState.Provider>
        <Form
          onLoginSuccess={async () => {
            if (state && state.next_url) {
              navigate(state.next_url);
            } else {
              navigate('/app/profile');
            }
          }}
          onSignUpSuccess={() => {
            // saveUserToDatabase(user).then(() => {
            //   navigate('/welcome');
            // });
          }}
        />
      </FormState.Provider>
    </>
  );
};

export default LoginView;
