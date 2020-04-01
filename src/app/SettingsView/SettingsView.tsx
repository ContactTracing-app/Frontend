import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { Spinner } from '@chakra-ui/core';
import { useIntl } from 'gatsby-plugin-intl';
import SettingsForm from './SettingsForm';
import PageHeader from '../../components/PageHeader';

const SettingsView = () => {
  const { isLoading } = useAuth();
  const intl = useIntl();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <PageHeader
        heading={intl.formatMessage({ id: 'Settings.heading' })}
        lead={intl.formatMessage({ id: 'Settings.lead' })}
      />
      <SettingsForm />
    </>
  );
};

export default SettingsView;
