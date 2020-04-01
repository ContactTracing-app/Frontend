import * as React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
  Heading,
  Box,
  Stack,
  List,
  ListItem,
  Flex,
  Avatar
} from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { P, ResponsiveContainer, Lead } from '../components/elements';
import michele from '../images/michele.jpg';
import ponk from '../images/ponk.jpg';

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
        src="https://www.youtube-nocookie.com/embed/Xid1f5F3ogI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </ResponsiveContainer>

    <Heading mt={12} fontSize="50px">
      Contact Tracing
    </Heading>
    <Lead>Keep the ones you love informed if you fall ill.</Lead>

    <Box maxWidth="40em">
      <P>
        Keeping everyone up-to-date if you fall ill is tricky. You have to
        remember who you met. They have to remember who they met after meeting
        you.
      </P>
      <P>
        In one click, Contact Tracing App notifies your recent direct and
        indirect contacts if you log that you show symptoms or test positive, so
        everyone can act appropriately and we can help limit the spread of
        COVID-19.
      </P>
      <P>#KeepTracingCOVID19</P>
      <Heading as="h2" mt={12} mb={4} size="xl">
        How it works
      </Heading>
      <List styleType="disc">
        <ListItem>
          Log Contact - Digital Logbook that makes it easier to trace who you
          met.
        </ListItem>
        <ListItem>
          Notify your loved one if you fall ill with no hassle.
        </ListItem>
        <ListItem>
          Get notified when one of your family and friends (and their contacts)
          shows symptoms, or tested positive.
        </ListItem>
        <ListItem>Your risk level - based on contacts around you.</ListItem>
      </List>
      <Box p={[5, 10]} my={12} shadow="sm" borderWidth="1px">
        <Heading as="h2" mb={4} size="xl">
          Help us spread the word
        </Heading>
        <P>
          The more users, connections, and logging we do, the better Contact
          Tracing will be. Help us spread the word and build and grow.
        </P>

        <Stack mt={8} isInline>
          <Box>
            <a href="https://www.facebook.com/ContactTracingApp/">
              {<FaFacebook />}
            </a>
          </Box>
          <Box>
            <a href="https://www.instagram.com/contacttracing.app/">
              {<FaInstagram />}
            </a>
          </Box>
          <Box>
            <a href="https://twitter.com/ContactTracing_">{<FaTwitter />}</a>
          </Box>
        </Stack>
      </Box>
      <Heading as="h2" mt={12} mb={4} size="xl">
        About the team
      </Heading>
      <Heading as="h3" mt={12} mb={4} size="md">
        Background
      </Heading>
      <P>
        In the light of COVID-19, Michele and I have been asking each other “how
        can we help?”, “what can we do to help?”, “How can we protect our loved
        ones?”
      </P>
      <P>
        Hoping to keep people safe and limit the spread of COVID-19, we decided
        to work on “Contact Tracing”. The concept is simple - if we get
        infected, we want to be able to notify family, friends, and everyone
        we’ve seen in the past two weeks (or even past month) as quickly as
        possible, likewise. So everyone can act appropriately, either get tested
        or stay isolated.
      </P>
      <P>
        It all started in our 35sqm flat in London - our weekend hack (which has
        already taken weekends and weekdays).
      </P>
      <Heading as="h3" mt={12} mb={4} size="md">
        Our aims
      </Heading>
      <List styleType="disc">
        <ListItem>To protect our loved ones.</ListItem>
        <ListItem>To help limit the spread of COVID-19.</ListItem>
      </List>
      <Heading as="h3" mt={12} mb={4} size="md">
        Founding Members
      </Heading>

      <Stack spacing={2}>
        <Box>
          <Flex height={12} width="auto" alignItems="center">
            <Avatar name="Ponk Memoli" src={ponk} />
            <Box
              ml="2"
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Ponk Memoli
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex height={12} width="auto" alignItems="center">
            <Avatar name="Michele Memoli" src={michele} />
            <Box
              ml="2"
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Michele Memoli
            </Box>
          </Flex>
        </Box>
      </Stack>

      <Heading as="h4" mt={12} mb={4} size="sm">
        Contributors
      </Heading>
      <List styleType="disc">
        <ListItem>Kumar Rangasamy</ListItem>
        <ListItem>Yogen (Fira Cloud Tech)</ListItem>
        <ListItem>Juntima Nawilaijaroen</ListItem>
        <ListItem>Max Sarasri</ListItem>
        <ListItem>Vero Rebagliatte</ListItem>
        <ListItem>Phark Lertchanyakul</ListItem>
        <ListItem>Sunhaporn Sribanditmongkol</ListItem>
        <ListItem>Panos Kollias</ListItem>
        <ListItem>Longyu Guan</ListItem>
      </List>

      <Heading as="h4" mt={12} mb={4} size="sm">
        Cloud providers
      </Heading>
      <P>
        These guys helped us out by giving us free credits to build on their
        infrastructure:
      </P>
      <List styleType="disc">
        <ListItem>Neo4j</ListItem>
        <ListItem>DigitialOcean</ListItem>
        <ListItem>Twilio</ListItem>
      </List>
    </Box>
  </Layout>
);

export default IndexPage;
