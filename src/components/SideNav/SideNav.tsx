import * as React from 'react';
import { Flex, Divider, Box } from '@chakra-ui/core';
import Logo from '../logo';
import PrimaryNav from '../PrimaryNav';
import Me from '../Me';

const SideNav: React.FC = () => (
  <Flex flexDirection="column" justifyContent="space-between" width="6em">
    <Box>
      <Logo />
      <Divider />
      <nav>
        <PrimaryNav />
      </nav>
    </Box>
    <Me />
  </Flex>
);

export default SideNav;
