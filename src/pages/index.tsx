import React from 'react';
import { Heading } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';

type PageProps = {};

const Index: React.FunctionComponent<PageProps> = () => (
  <Layout>
    <SEO />
    <Heading>Hi</Heading>
  </Layout>
);

export default Index;
