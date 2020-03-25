import * as React from 'react';
import SettingsForm from './SettingsForm';
import PageHeader from '../../components/PageHeader';

const SettingsView = () => {
  return (
    <>
      <PageHeader heading="Settings" lead="Line of text here" />
      <SettingsForm />
    </>
  );
};

export default SettingsView;
