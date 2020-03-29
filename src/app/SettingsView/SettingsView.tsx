import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { Spinner } from '@chakra-ui/core';
import SettingsForm from './SettingsForm';
import PageHeader from '../../components/PageHeader';

const SettingsView = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <PageHeader
        heading="Settings"
        lead="Change your preferences on Contract Tracing."
      />
      <SettingsForm />
    </>
  );
};

export default SettingsView;
