import * as React from 'react';
import { Text } from '@chakra-ui/core';
import LogContactForm from './LogContactForm';
import PageHeader from '../../components/PageHeader';

const LogView = () => {
  return (
    <>
      <PageHeader heading="Log your contact" lead="line of text here" />
      <Text fontSize="4xl">Who did you meet today?</Text>
      <LogContactForm />
    </>
  );
};

export default LogView;
