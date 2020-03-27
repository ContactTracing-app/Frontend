import * as React from 'react';
import SettingsForm from './SettingsForm';
import PageHeader from '../../components/PageHeader';

const SettingsView = () => (
  <>
    <PageHeader
      heading="Settings"
      lead="Change your preferences on Contract Tracing."
    />
    <SettingsForm />
  </>
);

export default SettingsView;
