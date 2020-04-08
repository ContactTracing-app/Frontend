import React, { useState } from 'react';
import { Form, auth, FormState } from 'gatsby-theme-firebase';
import {
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Flex
} from '@chakra-ui/core';
import { Field } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

const SignInForm: React.FunctionComponent<{
  onSuccess?: (user?: firebase.User | null) => void;
}> = ({ onSuccess = () => {}, ...restProps }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { setErrorMessage } = FormState.useContainer();
  return (
    <Stack spacing={4}>
      <Box width={['80%', '80%', '40%', '60%']} my={'2'}>
        <form
          {...restProps}
          onSubmit={async (event: any) => {
            event.preventDefault();
            try {
              const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
              );
              if (user) {
                await user.updateProfile({ displayName: name });
                await user.sendEmailVerification();
              }
              onSuccess(user);
            } catch (error) {
              setErrorMessage(error.message);
            }
          }}
        >
          <Input
            type="email"
            placeholder="email@example.com"
            my={2}
            value={email}
          />
          <Input type="password" value={password} my={1} />

          <Box>
            <Button my={4} variantColor="teal">
              Sign In
            </Button>
          </Box>
        </form>
      </Box>
    </Stack>
  );
};

export default SignInForm;
