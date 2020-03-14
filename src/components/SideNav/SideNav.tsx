import * as React from 'react';
import { Flex, Divider } from '@chakra-ui/core';
import Logo from '../logo';
import PrimaryNav from '../PrimaryNav';
import Me from '../Me';

const SideNav: React.FC = () => (
  <Flex bg="brand.ice" flexDirection="column" width="6em">
    <Logo />
    <Divider />
    <nav>
      <PrimaryNav />
    </nav>
    <Me />
  </Flex>
);

export default SideNav;
