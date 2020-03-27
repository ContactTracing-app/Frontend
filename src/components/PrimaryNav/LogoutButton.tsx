import * as React from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/core';
import { auth } from 'gatsby-theme-firebase';
import { NavButtonProps } from './NavButton';

type LogoutButton = Omit<NavButtonProps, 'Icon' | 'to' | 'label'>;

const LogoutButton: React.FC<LogoutButton> = ({ Icon }) => (
  <Flex alignItems="center" justifyContent={['center', 'flex-start']}>
    <Button
      variant="ghost"
      type="button"
      onClick={() => auth.signOut()}
    >
      <Box as={Icon} color="gray.400" size="1.4em" mr={[0, 5]} />
      <Heading
        display={['none', 'inline-block']}
        as="span"
        color="gray.400"
        size="sm"
      >
        Log out
      </Heading>
    </Button>
  </Flex>
);

export default LogoutButton;
