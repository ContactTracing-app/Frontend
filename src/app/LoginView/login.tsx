import * as React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';
import { RouteComponentProps } from '@reach/router';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import PageHeader from '../../components/PageHeader';

const LoginView: React.FC<RouteComponentProps> = () => {
  const {
    state: { next_url }
  } = useLocation();
  return (
    <>
      <PageHeader heading="Log in" lead="Line of text here" />
      <FormState.Provider>
        <Form
          onLoginSuccess={async () => {
            if (next_url) {
              navigate(next_url);
            } else {
              navigate('/app/contact');
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
