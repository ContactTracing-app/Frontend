import * as React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import theme from '../../config/theme';

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
  <Box flexGrow={1} as="main" bg="brand.ice" p={3}>
    {children}
  </Box>
);

export const GlobalStyles: React.FC = () => (
  <Global
    styles={{
      'html,body': {
        background: theme.colors.brand.coldGrey
      }
    }}
  />
);
