import * as React from 'react';
import { Flex, Divider, Box } from '@chakra-ui/core';
import Logo from '../Logo';
import PrimaryNav from '../PrimaryNav';
import { Link } from 'gatsby';

const SideNav: React.FC = () => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    width={['5em', '14em']}
    bg="gray.50"
  >
    <Box>
      <Flex mt={10} justifyContent="center">
        <Box size="5em" p={2} mb={8}>
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
