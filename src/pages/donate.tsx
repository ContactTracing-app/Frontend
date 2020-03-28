import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { P } from '../components/elements';
import PageHeader from '../components/PageHeader';

type DonatePageProps = {};

const DonatePage: React.FunctionComponent<DonatePageProps> = () => (
  <Layout>
    <SEO />
    <>
      <PageHeader
        heading="We need your help to keep going"
        lead="Running this site is going to get expensive."
      />
    </>
    <P>#KeepTracingCOVID19</P>
  </Layout>
);

export default DonatePage;
