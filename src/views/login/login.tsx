import * as React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';
import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';

const LoginView: React.FC<RouteComponentProps> = () => (
  <div>
    <h1>Hi Login</h1>
    <FormState.Provider>
      <Form
        onLoginSuccess={() => {
          navigate('/app/contact');
        }}
        onSignUpSuccess={() => {
          // saveUserToDatabase(user).then(() => {
          //   navigate('/welcome');
          // });
        }}
      />
    </FormState.Provider>
  </div>
);

export default LoginView;
