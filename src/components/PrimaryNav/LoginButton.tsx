import * as React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/core';
import { NavButtonProps } from './NavButton';
import { navigate } from 'gatsby';

type LoginButton = Omit<NavButtonProps, 'Icon' | 'to' | 'label'>;

const LoginButton: React.FC<LoginButton> = ({ Icon }) => {
  return (
    <button type="button" onClick={() => navigate('/app/login')}>
      <Flex alignItems="center" justifyContent={['center', 'flex-start']} p={4}>
        <Box as={Icon} color="gray.400" size="1.4em" mr={[0, 5]} />
        <Heading
          display={['none', 'inline-block']}
          as="span"
          color="gray.400"
          size="sm"
        >
          Log in
        </Heading>
      </Flex>
    </button>
  );
};

export default LoginButton;
