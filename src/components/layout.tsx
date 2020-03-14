import * as React from 'react';
import { ThemeProvider, CSSReset, Divider, Flex } from '@chakra-ui/core';
import { Footer, GlobalStyles, Main } from './elements';
import theme from '../../config/theme';
import SideNav from './SideNav';

const defaultProps = {};

type LayoutProps = typeof defaultProps;

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <GlobalStyles />
    <Flex flexDirection="column">
      <Flex minH="100vh">
        <SideNav />
        <Divider m={0} orientation="vertical" />
        <Main>
          {children}
          <Footer />
        </Main>
      </Flex>
    </Flex>
  </ThemeProvider>
);

Layout.defaultProps = defaultProps;

export default Layout;
