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
  Text,
  Flex
} from '@chakra-ui/core';
import { Redirect } from '@reach/router';
import { Field } from 'formik';
import { useIntl, navigate } from 'gatsby-plugin-intl';

const SignUpForm: React.FunctionComponent<{
  onSuccess?: (user?: firebase.User | null) => void;
}> = ({
  onSuccess = (user) => {
    navigate('/me/profile');
  },
  ...restProps
}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [displayName, setdisplayName] = useState('');
  const { setErrorMessage, errorMessage } = FormState.useContainer();

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
                console.log(user);
                await user.updateProfile({ displayName });
              }
              onSuccess(user);
            } catch (error) {
              setErrorMessage(error.message);
            }
          }}
        >
          <Input
            type="text"
            placeholder="Name"
            my={2}
            onChange={(e: any) => {
              setdisplayName(e.target.value);
            }}
          />

          {!displayName ? (
            <Text color="red.500">Name must not be empty.</Text>
          ) : (
            ''
          )}
          <Input
            type="email"
            placeholder="Email"
            my={2}
            onChange={(e: any) => {
              setemail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e: any) => {
              setpassword(e.target.value);
            }}
            my={1}
          />

          <Box>
            <Button
              my={4}
              variantColor="teal"
              type="submit"
              isDisabled={!displayName || !email || !password}
            >
              Sign Up
            </Button>
          </Box>
        </form>

        {errorMessage && <Text color="red.500">{errorMessage}</Text>}
      </Box>
    </Stack>
  );
};

export default SignUpForm;
