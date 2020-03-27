import { Link } from '@chakra-ui/core';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { P } from '../components/elements';
import PageHeader from '../components/PageHeader';

type PageProps = {};

const PressPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    <SEO />
    <PageHeader
      heading="Contact Tracing"
      lead="Keep the ones you love informed if you fall ill."
    />
    <P>
      In one click, Contact Tracing App notifies recent direct and indirect
      contacts of users if they log that they show symptoms, or test positive,
      so everyone can act appropriately and we can help limit the spread of
      COVID-19.
    </P>
    <P>
      Starting life as a weekend hack project from the simple question: “How can
      we protect our loved ones?”, the husband and wife founding team, with help
      from contributors from around the globe, finally launched the app.
    </P>
    <P>
      It’s FREE to use. Contact Tracing App is an open source project and
      totally non-commercial.
    </P>
    <P>
      Sign up, connect with your family and friends, and start logging your
      contacts at{' '}
      <Link to="https://contacttracing.app/">www.contacttracing.app</Link>.
    </P>
    <P>#KeepTracingCOVID19</P>
  </Layout>
);

export default PressPage;
