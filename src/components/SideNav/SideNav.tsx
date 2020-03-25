import * as React from 'react';
import { Flex, Divider, Box } from '@chakra-ui/core';
import Logo from '../logo';
import PrimaryNav from '../PrimaryNav';

const SideNav: React.FC = () => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    width="14em"
    bg="gray.50"
  >
    <Box>
      <Flex mt={10} justifyContent="center">
        <Box size="5em">
          <Logo />
        </Box>
      </Flex>
      <Divider />
      <nav>
        <PrimaryNav />
      </nav>
    </Box>
  </Flex>
);

export default SideNav;
