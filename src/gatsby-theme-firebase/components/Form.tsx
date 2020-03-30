import * as React from 'react';
import { SocialLogins } from 'gatsby-theme-firebase';
import { useToast } from '@chakra-ui/core';

interface LoginViewProps {
  onSignUpSuccess?: (user?: firebase.User | null) => void;
  onLoginSuccess?: (user?: firebase.auth.UserCredential) => void;
  onResetSuccess?: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const toast = useToast();
  return (
    <>
      <SocialLogins
        onSuccess={onLoginSuccess}
        onError={(error) => {
          toast({
            title: 'Failed to log in',
            position: 'bottom-right',
            description: error.message,
            status: 'error',
            isClosable: true
          });
        }}
      />
    </>
  );
};

export default LoginView;
