import React from 'react';
import { Heading } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import hasWindow from '../helpers/hasWindow';

type ConsentPageProps = {};

const ConsentPage: React.FunctionComponent<ConsentPageProps> = () => {
  return (
    <Layout>
      <SEO />
      <Heading>Legal Consent</Heading>
    </Layout>
  );
};

export default ConsentPage;
