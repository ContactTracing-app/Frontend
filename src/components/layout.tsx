import * as React from 'react';
import { Divider, Flex, ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Footer, Main, GlobalStyles, Content } from './elements';
import SideNav from './SideNav';
import CookieConsent from './CookieConsent';
import theme from '../../config/theme';
import '../i18n';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <GlobalStyles />
    <Flex flexDirection="column">
      <Flex minH="100vh">
        <SideNav />
        <Divider mx="0" orientation="vertical" />
        <Main>
          <Content>{children}</Content>
          <Footer />
        </Main>
        <CookieConsent />
      </Flex>
    </Flex>
  </ThemeProvider>
);

export default Layout;
