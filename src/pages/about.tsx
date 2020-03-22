import React from 'react';
import { Heading, Text, List, ListItem } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => (
  <Layout showSidePanel={false}>
    <SEO />
    <Heading>About Contact-Tracing</Heading>
    <Text>Special thanks to:</Text>

    <List styleType="disc">
      <ListItem>Neo4j</ListItem>
      <ListItem>Digitialocean</ListItem>
    </List>

    <Text>And the contributors</Text>
    <List styleType="disc">
      <ListItem>Kumar</ListItem>
      <ListItem>Max</ListItem>
      <ListItem>Ja</ListItem>
    </List>
  </Layout>
);

export default AboutPage;
