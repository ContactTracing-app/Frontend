import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import LogContactForm from './LogContactForm';
import PageHeader from '../../components/PageHeader';

const LogView = () => {
  const intl = useIntl();
  return (
    <>
      <PageHeader
        heading={intl.formatMessage({ id: 'LogView.heading' })}
        lead={intl.formatMessage({ id: 'LogView.lead' })}
      />
      <LogContactForm />
    </>
  );
};

export default LogView;
