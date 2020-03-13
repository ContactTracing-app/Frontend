import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseProvider from 'gatsby-plugin-firebase';
import * as firebase from 'firebase/app';

const uiConfig = {
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/app/contact'
};

const LoginView: React.FC<RouteComponentProps> = () => (
  <div>
    <h1>Hello</h1>
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebaseProvider.auth()}
    />
  </div>
);

export default LoginView;
