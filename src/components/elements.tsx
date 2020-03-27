import * as React from 'react';
import { Flex, Box, Text, Link } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

export const Header: React.FC = () => (
  <Flex>
    <Box>Hi</Box>
  </Flex>
);

interface FooterQuery {
  site: {
    siteMetadata: {
      termsLink: string;
    };
  };
}

export const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { termsLink }
    }
  } = useStaticQuery<FooterQuery>(graphql`
    query FootQuery {
      site {
        siteMetadata {
          termsLink
        }
      }
    }
  `);
  return (
    <Box as="footer" mt="10em">
      <Link href={termsLink}>Terms &amp; Conditions</Link>
      <Text fontSize="xs" as="p">
        &copy; All Rights Reserved.{' '}
      </Text>
      <Text fontSize="xs" as="p">
        Made with <span role="img">🙏</span>
      </Text>
    </Box>
  );
};

export const Main: React.FC = ({ children }) => (
  <Box alignItems="center" flexGrow={1} as="main" p={[10, 20]}>
    {children}
  </Box>
);

export const P: React.FC = ({ children, ...rest }) => (
  <Text mt={4} {...rest}>
    {children}
  </Text>
);

export const GlobalStyles: React.FC = () => <Global styles={{}} />;
