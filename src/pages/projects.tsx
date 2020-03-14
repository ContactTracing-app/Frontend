import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { config, useSpring } from 'react-spring';
import Layout from '../components/layout';

import SEO from '../components/SEO';
import { ChildImageSharp } from '../types';

type PageProps = {
  data: {
    projects: {
      nodes: {
        title: string;
        slug: string;
        cover: ChildImageSharp;
      }[];
    };
  };
};

const Projects: React.FunctionComponent<PageProps> = ({
  data: { projects }
}) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <Layout color="#000">
      <SEO title="Projects | Jodie" />
      <div>
        {projects.nodes.map(project => (
          <div>
            <Img fluid={project.cover.childImageSharp.fluid} />
            <span>{project.title}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query Projects {
    projects: allProjectsYaml {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
