import * as React from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/core';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { auth } from 'gatsby-theme-firebase';
import { NavButtonProps } from './NavButton';

type LogoutButton = Omit<NavButtonProps, 'Icon' | 'to' | 'label'>;

const LogoutButton: React.FC<LogoutButton> = ({ Icon }) => {
  const intl = useIntl();
  return (
    <Flex alignItems="center" mt={1} justifyContent={['center', 'flex-start']}>
      <Button
        variant="ghost"
        type="button"
        onClick={() =>
          auth.signOut().then(() => {
            // push back to sign in page
            navigate('/me/sign-in');
          })
        }
      >
        <Box as={Icon} color="gray.400" size="1.4em" mr={[0, 5]} />
        <Heading
          display={['none', 'inline-block']}
          as="span"
          color="gray.400"
          size="sm"
        >
          {intl.formatMessage({ id: `PrimaryNav.Log out` })}
        </Heading>
      </Button>
    </Flex>
  );
};

export default LogoutButton;
