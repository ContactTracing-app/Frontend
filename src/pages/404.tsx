import * as React from 'react';
import { Heading } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO />
    <Heading>404: Not Found</Heading>
  </Layout>
);

export default NotFoundPage;
