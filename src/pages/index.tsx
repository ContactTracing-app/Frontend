import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';

type PageProps = {};

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout showSidePanel={false}>
    <SEO />
    <Heading>Contact Tracing</Heading>
    <Text>Important to start doing now</Text>

    <Box>Video</Box>
  </Layout>
);

export default IndexPage;
