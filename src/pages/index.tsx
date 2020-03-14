import React from 'react';
import { Heading } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { ChildImageSharp } from '../types';

type PageProps = {
  data: {
    firstProject: {
      title: string;
      slug: string;
      cover: ChildImageSharp;
    };
    threeProjects: {
      nodes: {
        title: string;
        slug: string;
        cover: ChildImageSharp;
      }[];
    };
    aboutUs: ChildImageSharp;
    instagram: ChildImageSharp;
  };
};

const Index: React.FunctionComponent<PageProps> = ({
  data: { firstProject, threeProjects, aboutUs, instagram }
}) => {
  return (
    <Layout>
      <SEO />
      <Heading>Hi</Heading>
    </Layout>
  );
};

export default Index;
