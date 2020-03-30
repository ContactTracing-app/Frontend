import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { P } from '../components/elements';
import PageHeader from '../components/PageHeader';

type DonatePageProps = {};

const I18nPage: React.FunctionComponent<DonatePageProps> = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO />
      <>
        <PageHeader
          heading={intl.formatMessage({ id: 'title' })}
          lead={intl.formatMessage({ id: 'description' })}
        />
      </>
      <P>{intl.formatMessage({ id: 'haha' })}</P>
      <P>{intl.formatMessage({ id: 'foo' })}</P>
      <P>#KeepTracingCOVID19</P>
    </Layout>
  );
};

export default I18nPage;
