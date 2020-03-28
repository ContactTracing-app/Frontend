import * as React from 'react';
import useFirebaseConfig from 'gatsby-theme-firebase/src/hooks/useFirebaseConfig';
import { Button, Stack, Box, useToast } from '@chakra-ui/core';
import { auth } from 'gatsby-theme-firebase';
import {
  googleProvider,
  facebookProvider
} from 'gatsby-theme-firebase/src/firebase/auth';

const SocialLogins: React.FC<{
  onSuccess?: (user?: firebase.auth.UserCredential) => void;
  onError?: (err: any) => void;
}> = ({ onSuccess = () => {}, onError = () => {} }) => {
  const { socialLogins } = useFirebaseConfig();
  const enableGoogle = socialLogins.includes('google');
  const enableFacebook = socialLogins.includes('facebook');

  return (
    <Stack>
      {enableGoogle && (
        <Box>
          <Button
            onClick={async () => {
              try {
                const user = await auth.signInWithPopup(googleProvider());
                onSuccess(user);
              } catch (err) {
                console.error('Authentication Error: ', err);
                onError(err);
              }
            }}
          >
            Sign in with Google
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default SocialLogins;
