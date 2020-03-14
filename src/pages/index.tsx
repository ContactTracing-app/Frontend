import React from 'react';
import { Heading } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';

type PageProps = {};

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout showSidePanel={false}>
    <SEO />
    <Heading>About Contact-Tracking</Heading>
  </Layout>
);

export default IndexPage;
