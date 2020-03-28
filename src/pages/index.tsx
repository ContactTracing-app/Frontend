import * as React from 'react';
import { Heading, Box } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { P, ResponsiveContainer } from '../components/elements';

type PageProps = {};

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    <SEO />
    <ResponsiveContainer>
      <Box
        as="iframe"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        src="https://www.youtube-nocookie.com/embed/4jFT5qTVeYs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </ResponsiveContainer>

    <Heading mt={12} fontSize="50px">
      Contact Tracing
    </Heading>

    <Box p={5} my={12} shadow="sm" borderWidth="1px">
      <Heading fontSize="xl">What is this?</Heading>
      <P>
        In the light of COVID-19, Michele and I have been asking each other “how
        can we help?”, “what can we do to help?”, “How can we protect our loved
        ones?”
      </P>
      <P>
        We decided to work on “Contact Tracing”. The concept is simple – if we
        get infected, we want to be able to notify people, family and friends,
        that we’ve seen in the past two weeks (or even past month), likewise. So
        everyone can act appropriately, either get tested or stay isolated.
      </P>
      <P>
        It all started in our 39sqm flat in London - our weekend hack (which
        turns to be almost a month hack lol).
      </P>
    </Box>
  </Layout>
);

export default IndexPage;
