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
    buildTime: string;
    siteMetadata: {
      termsLink: string;
    };
  };
}

export const Footer: React.FC = () => {
  const {
    site: {
      buildTime,
      siteMetadata: { termsLink }
    }
  } = useStaticQuery<FooterQuery>(graphql`
    query FootQuery {
      site {
        buildTime(formatString: "ddd, DD-MM-YYYY HH:mm")
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
        Made with <span role="img">🙏</span> at home on {buildTime}.
      </Text>
    </Box>
  );
};

export const Main: React.FC = ({ children }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    flexGrow={1}
    as="main"
    p={[10, 20]}
  >
    {children}
  </Flex>
);

export const Content: React.FC = ({ children }) => (
  <Box bg="blue" flexGrow={1} as="div">
    {children}
  </Box>
);

export const P: React.FC = ({ children, ...rest }) => (
  <Text mt={4} {...rest}>
    {children}
  </Text>
);

export const GlobalStyles: React.FC = () => <Global styles={{}} />;
