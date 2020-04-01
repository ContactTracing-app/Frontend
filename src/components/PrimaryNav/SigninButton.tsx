import * as React from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/core';
import { navigate, FormattedMessage } from 'gatsby-plugin-intl';
import { NavButtonProps } from './NavButton';

type SigninButtonProps = Omit<NavButtonProps, 'Icon' | 'to' | 'label'>;

const SigninButton: React.FC<SigninButtonProps> = ({ Icon }) => (
  <Flex alignItems="center" mt={4} justifyContent={['center', 'flex-start']}>
    <Button
      variant="ghost"
      type="button"
      onClick={() => navigate('/me/sign-in')}
    >
      <Box as={Icon} size="1.4em" mr={[0, 5]} />
      <Heading display={['none', 'inline-block']} as="span" size="sm">
        <FormattedMessage id="PrimaryNav.Sign in" />
      </Heading>
    </Button>
  </Flex>
);

export default SigninButton;
