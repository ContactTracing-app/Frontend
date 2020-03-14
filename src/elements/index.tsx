import * as React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import theme from '../../config/theme';

export const Footer: React.FC = () => (
  <Flex>
    <Box>Hi</Box>
  </Flex>
);

export const Sidebar: React.FC = ({ children }) => (
  <Flex maxW={200}>
    <Box>{children}</Box>
  </Flex>
);

export const Page: React.FC = ({ children }) => (
  <Box m="6em" borderRadius="3em" bg="white">
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
