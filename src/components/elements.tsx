import * as React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { Global } from '@emotion/core';

export const Header: React.FC = () => (
  <Flex>
    <Box>Hi</Box>
  </Flex>
);

export const Footer: React.FC = () => (
  <Flex>
    <Box>Hi</Box>
  </Flex>
);

export const Main: React.FC = ({ children }) => (
  <Box alignItems="center" flexGrow={1} as="main" p="20">
    {children}
  </Box>
);

export const GlobalStyles: React.FC = () => <Global styles={{}} />;
