import * as React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';

const isPartiallyActive = ({
  isPartiallyCurrent
}: {
  isPartiallyCurrent: boolean;
}) => (isPartiallyCurrent ? { bg: 'tomato' } : {});

const PartialNavLink = ({
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

type NavButtonProps = {
  to: string;
  label: string;
  Icon: React.ComponentType;
};

const NavButton: React.FC<NavButtonProps> = ({ to, label, Icon }) => (
  <PartialNavLink to={to}>
    <Flex alignItems="center" p={4}>
      <Box as={Icon} size="1.4em" mr={5} />
      <Heading as="span" size="sm">
        {label}
      </Heading>
    </Flex>
  </PartialNavLink>
);

export default NavButton;
