import * as React from 'react';
import { ThemeProvider, CSSReset, Flex, Box } from '@chakra-ui/core';
import theme from '../../config/theme';
import Logo from './logo';
import PrimaryNav from './PrimaryNav';
import Me from './Me';
import { Footer, Sidebar, GlobalStyles, Page } from '../elements';

const defaultProps = {};

type LayoutProps = typeof defaultProps;

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <GlobalStyles />
    <Page>
      <Sidebar>
        <Logo />
        <nav>
          <PrimaryNav />
        </nav>
        <Me />
      </Sidebar>
      <Box as="main">{children}</Box>
    </Page>
    <Footer />
  </ThemeProvider>
);

Layout.defaultProps = defaultProps;

export default Layout;
