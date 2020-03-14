import * as React from 'react';
import { auth, useAuth } from 'gatsby-theme-firebase';
import { navigate } from 'gatsby';

const Me: React.FC = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {profile && <p>Current User: {profile.email}</p>}
      {isLoggedIn ? (
        <button type="button" onClick={() => auth.signOut()}>
          Log out
        </button>
      ) : (
        <button type="button" onClick={() => navigate('/login')}>
          Log in
        </button>
      )}
    </div>
  );
};

export default Me;
