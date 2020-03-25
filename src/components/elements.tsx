import * as React from 'react';
import { Flex, Box, Text } from '@chakra-ui/core';
import { Global } from '@emotion/core';

export const Header: React.FC = () => (
  <Flex>
    <Box>Hi</Box>
  </Flex>
);

export const Footer: React.FC = () => (
  <Flex as="footer" mt="10em">
    <Text fontSize="sm" as="p">
      &copy; All Rights Reserved
    </Text>
    <Text fontSize="sm" as="p">
      Made with hope.
    </Text>
  </Flex>
);

export const Main: React.FC = ({ children }) => (
  <Box alignItems="center" flexGrow={1} as="main" p="20">
    {children}
  </Box>
);

export const GlobalStyles: React.FC = () => <Global styles={{}} />;
