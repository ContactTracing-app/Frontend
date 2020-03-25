import * as React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/core';
import { NavButtonProps } from './NavButton';
import { auth } from 'gatsby-theme-firebase';

type LogoutButton = Omit<NavButtonProps, 'Icon' | 'to' | 'label'>;

const LogoutButton: React.FC<LogoutButton> = ({ Icon }) => {
  return (
    <button type="button" onClick={() => auth.signOut()}>
      <Flex alignItems="center" p={4}>
        <Box as={Icon} color="gray.400" size="1.4em" mr={5} />
        <Heading as="span" color="gray.400" size="sm">
          Log out
        </Heading>
      </Flex>
    </button>
  );
};

export default LogoutButton;
