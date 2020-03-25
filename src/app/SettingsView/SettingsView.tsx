import * as React from 'react';
import SettingsForm from './SettingsForm';
import PageHeader from '../../components/PageHeader';

const SettingsView = () => {
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
