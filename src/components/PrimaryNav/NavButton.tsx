import * as React from 'react';
import { Tooltip, Box, Flex } from '@chakra-ui/core';
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
  <Flex justifyContent="center">
    <PartialNavLink to={to}>
      <Tooltip label={label} aria-label={label}>
        <Box p={4}>
          <Box as={Icon} size="32px" />
        </Box>
      </Tooltip>
    </PartialNavLink>
  </Flex>
);

export default NavButton;
