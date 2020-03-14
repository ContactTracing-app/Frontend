import * as React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';
import { Heading } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';

const LoginView: React.FC<RouteComponentProps> = () => (
  <>
    <Heading>Login</Heading>
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
  </>
);

export default LoginView;
