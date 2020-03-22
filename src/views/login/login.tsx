import * as React from 'react';
import { Form, FormState, auth } from 'gatsby-theme-firebase';
import { Heading } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';

const LoginView: React.FC<RouteComponentProps> = () => (
  <>
    <Heading>Login2</Heading>
    <FormState.Provider>
      <Form
        onLoginSuccess={async () => {
          const token = await auth.currentUser?.getIdToken();
          console.log(token);
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
