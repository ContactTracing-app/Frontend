import * as React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';
import { navigate } from 'gatsby';

const LoginView = () => {
  return (
    <div>
      <h1>Login</h1>
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
};

export default LoginView;
