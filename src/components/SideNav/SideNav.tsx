import * as React from 'react';
import { Flex, Divider, Box } from '@chakra-ui/core';
import { Link } from 'gatsby';
import Logo from '../Logo';
import PrimaryNav from '../PrimaryNav';

const SideNav: React.FC = () => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    minW={['5em', '14em']}
    bg="brand.warmGrey"
  >
    <Box>
      <Flex mt={10} justifyContent="center">
        <Box size={['5em', '7em']} p={2} mb={8}>
          <Link to="/">
            <Logo />
          </Link>
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
