import * as React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { navigate } from 'gatsby';

const Me: React.FC = () => {
  const auth = firebase.auth();
  const [user, initialising, error] = useAuthState(auth);

  const logout = () => {
    firebase.auth().signOut();
  };

  if (initialising) {
    return <p>loading…</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!user) {
    return (
      <div>
        <button type="button" onClick={() => navigate('/app/login')}>
          Log in
        </button>
      </div>
    );
  }
  return (
    <div>
      <p>Current User: {user.email}</p>
      <button type="button" onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
};

export default Me;
