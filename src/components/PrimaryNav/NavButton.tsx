import * as React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';

const isPartiallyActive = ({
  isPartiallyCurrent
}: {
  isPartiallyCurrent: boolean;
}) => (isPartiallyCurrent ? { bg: 'tomato' } : {});

export const PartialNavLink = ({
  children,
  to,
  ...rest
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <GatsbyLink getProps={isPartiallyActive} {...rest} to={to}>
    {children}
  </GatsbyLink>
);

export type NavButtonProps = {
  to: string;
  label: string;
  Icon: React.ComponentType;
};

const NavButton: React.FC<NavButtonProps> = ({ to, label, Icon }) => (
  <PartialNavLink to={to}>
    <Flex alignItems="center" justifyContent={['center', 'flex-start']} p={4}>
      <Box as={Icon} size="1.4em" mr={[0, 5]} />
      <Heading display={['none', 'inline-block']} as="span" size="sm">
        {label}
      </Heading>
    </Flex>
  </PartialNavLink>
);

export default NavButton;
