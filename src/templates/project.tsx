import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from '@chakra-ui/core';
import { config, useSpring, animated } from 'react-spring';
import Layout from '../components/layout';
import SEO from '../components/SEO';

type PageProps = {
  data: {
    project: {
      title_detail: string;
      color: string;
      div: string;
      desc: string;
      slug: string;
      parent: {
        modifiedTime: string;
        birthTime: string;
      };
      cover: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
    images: {
      nodes: {
        name: string;
        childImageSharp: {
          fluid: {
            aspectRatio: number;
            src: string;
            srcSet: string;
            sizes: string;
            base64: string;
            tracedSVG: string;
            srcWebp: string;
            srcSetWebp: string;
          };
        };
      }[];
    };
  };
};

const Project: React.FunctionComponent<PageProps> = ({
  data: { project, images }
}) => {
  const divAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  });

  const titleAnimation = useSpring({
    config: config.slow,
    delay: 300,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  const descAnimation = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  const imagesAnimation = useSpring({
    config: config.slow,
    delay: 800,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <Layout>
      <SEO
        pathname={project.slug}
        title={`${project.title_detail} | Jodie`}
        desc={project.desc}
        node={project.parent}
        banner={project.cover.childImageSharp.resize.src}
        individual
      />
      <div py={10} px={[6, 6, 8, 10]}>
        <div style={divAnimation}>{project.div}</div>
        <animated.h1 style={titleAnimation}>{project.title_detail}</animated.h1>
        <div style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        </div>
      </div>
      <div bg={project.color} py={10}>
        <div style={imagesAnimation} px={[6, 6, 8, 10]}>
          {images.nodes.map(image => (
            <Img
              alt={image.name}
              key={image.childImageSharp.fluid.src}
              fluid={image.childImageSharp.fluid}
            />
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Want to start your own project?</h2>
        <Button>Contact Us</Button>
      </div>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query ProjectTemplate($slug: String!, $images: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      title_detail
      color
      desc
      slug
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(
      filter: { relativePath: { regex: $images } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
