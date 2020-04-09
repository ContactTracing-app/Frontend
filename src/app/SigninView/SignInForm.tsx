import React, { useState } from 'react';
import { Form, auth, FormState } from 'gatsby-theme-firebase';
import { Stack, Box, Input, Text, Button, Flex } from '@chakra-ui/core';
import { Field } from 'formik';
import { useIntl, navigate } from 'gatsby-plugin-intl';

const SignInForm: React.FunctionComponent<{
  onSuccess?: (user?: firebase.User | null) => void;
}> = ({
  onSuccess = (user) => {
    navigate('/me');
  },
  ...restProps
}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { setErrorMessage, errorMessage } = FormState.useContainer();
  return (
    <Stack spacing={4}>
      <Box width={['90%', '80%', '60%', '60%']} my={'2'}>
        <form
          {...restProps}
          onSubmit={async (event: any) => {
            event.preventDefault();
            try {
              const { user } = await auth.signInWithEmailAndPassword(
                email,
                password
              );
              if (user) {
              }

              onSuccess(user);
            } catch (error) {
              setErrorMessage(error.message);
            }
          }}
        >
          <Input
            type="email"
            placeholder="Email"
            my={2}
            value={email}
            onChange={(e: any) => setemail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            my={1}
            onChange={(e: any) => setpassword(e.target.value)}
          />

          <Box>
            <Button
              my={4}
              variantColor="teal"
              type="submit"
              isDisabled={!email || !password}
            >
              Sign In
            </Button>
          </Box>
        </form>

        {errorMessage && <Text color="red.500">{errorMessage} </Text>}
      </Box>
    </Stack>
  );
};

export default SignInForm;
