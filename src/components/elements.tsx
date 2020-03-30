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
      privacyLink: string;
      termsOfServiceLink: string;
      cookiePolicyLink: string;
    };
  };
}

export const Footer: React.FC = () => {
  const {
    site: {
      buildTime,
      siteMetadata: { 
        privacyLink,
        termsOfServiceLink,
        cookiePolicyLink
      }
    }
  } = useStaticQuery<FooterQuery>(graphql`
    query FootQuery {
      site {
        buildTime(formatString: "ddd, DD-MM-YYYY HH:mm")
        siteMetadata {
          privacyLink,
          termsOfServiceLink,
          cookiePolicyLink
        }
      }
    }
  `);
  return (
    <Box as="footer" mt="10em">
      <Text fontSize="xs" as="p">
        <Link href={privacyLink} marginRight=".5em">Privacy Policy</Link>
        <Link href={termsOfServiceLink} marginRight=".5em">Terms of Service</Link> 
        <Link href={cookiePolicyLink}>Cookie Policy</Link>
      </Text>
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

export const ResponsiveContainer: React.FC = ({ children }) => (
  <Box position="relative" height="0" overflow="hidden" maxW="100%" pb="56.25%">
    {children}
  </Box>
);

export const Lead: React.FC = (props) => (
  <Text fontSize="2xl" mb={8} {...props} />
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
