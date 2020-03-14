import * as React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from '../../config/theme';
import Logo from './logo';
import PrimaryNav from './PrimaryNav';
import Me from './Me';

const defaultProps = {};

type LayoutProps = typeof defaultProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <>
        <Logo />
        <nav>
          <PrimaryNav />
        </nav>
        <Me />

        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
