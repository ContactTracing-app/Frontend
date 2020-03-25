import * as React from 'react';
import { Heading } from '@chakra-ui/core';
import SettingsForm from './SettingsForm';

const SettingsView = () => {
  return (
    <>
      <Heading>Settings</Heading>
      <SettingsForm />
    </>
  );
};

export default SettingsView;
