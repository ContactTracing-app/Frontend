import * as React from 'react';
import { Heading, Box } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { P } from '../components/elements';

type CookiePolicyPageProps = {};

const CookiePolicyPage: React.FC<CookiePolicyPageProps> = () => (
  <Layout>
    <SEO />
    <>
      <PageHeader heading="Cookie Policy" lead="All things cookies" />
      <Box maxWidth="40em">
        <P>
          We use cookies to help improve your experience of{' '}
          <a href="https://contacttracing.app">https://contacttracing.app</a>.
          This cookie policy is part of Contact tracking's privacy policy, and
          covers the use of cookies between your device and our site.
        </P>
        <P>
          If you don’t wish to accept cookies from us, you should instruct your
          browser to refuse cookies from{' '}
          <a href="https://contacttracing.app">https://contacttracing.app</a>,
          with the understanding that we may be unable to provide you with some of
          your desired content and services.
        </P>
        <Heading as="h3" mt={12} mb={4} size="md">
          What is a cookie?
        </Heading>
        <P>
          A cookie is a small piece of data that a website stores on your device
          when you visit, typically containing information about the website
          itself, a unique identifier that allows the site to recognise your web
          browser when you return, additional data that serves the purpose of the
          cookie, and the lifespan of the cookie itself.
        </P>
        <P>
          Cookies are used to enable certain features (eg. logging in), to track
          site usage (eg. analytics), to store your user settings (eg. timezone,
          notification preferences), and to personalise your content (eg.
          advertising, language).
        </P>
        <P>
          Cookies set by the website you are visiting are normally referred to as
          “first-party cookies”, and typically only track your activity on that
          particular site. Cookies set by other sites and companies (ie. third
          parties) are called “third-party cookies”, and can be used to track you
          on other websites that use the same third-party service.
        </P>
        <Heading as="h3" mt={12} mb={4} size="md">
          How you can control or opt out of cookies
        </Heading>
        <P>
          If you do not wish to accept cookies from us, you can instruct your
          browser to refuse cookies from our website. Most browsers are configured
          to accept cookies by default, but you can update these settings to
          either refuse cookies altogether, or to notify you when a website is
          trying to set or update a cookie.
        </P>
        <P>
          If you browse websites from multiple devices, you may need to update
          your settings on each individual device.
        </P>
        <P>
          Although some cookies can be blocked with little impact on your
          experience of a website, blocking all cookies may mean you are unable to
          access certain features and content across the sites you visit.
        </P>
      </Box>
    </>
  </Layout>
);

export default CookiePolicyPage;
