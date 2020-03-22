import * as React from 'react';
import { auth, useAuth } from 'gatsby-theme-firebase';
import { navigate } from 'gatsby';
import { Avatar, Spinner } from '@chakra-ui/core';

const Me: React.FC = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();
  const displayName = profile?.displayName || profile?.email;
  return (
    <>
      {isLoading && <Spinner size="xs" />}
      {profile && <Avatar name={displayName} src={profile?.photoURL} />}
      {isLoggedIn ? (
        <button type="button" onClick={() => auth.signOut()}>
          Log out
        </button>
      ) : (
        <button type="button" onClick={() => navigate('/app/login')}>
          Log in
        </button>
      )}
    </>
  );
};

export default Me;
