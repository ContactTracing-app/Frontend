import * as React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';
import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import PageHeader from '../../components/PageHeader';

const LoginView: React.FC<RouteComponentProps> = () => (
  <>
    <PageHeader heading="Log in" lead="Line of text here" />
    <FormState.Provider>
      <Form
        onLoginSuccess={async () => {
          navigate('/app/contact');
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

export default LoginView;
