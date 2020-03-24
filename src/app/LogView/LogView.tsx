import * as React from 'react';
import { Heading, Text } from '@chakra-ui/core';
import LogContactForm from './LogContactForm';

const LogView = () => {
  return (
    <>
      <Heading>Log</Heading>
      <Text fontSize="4xl">Who did you meet today?</Text>
      <LogContactForm />
    </>
  );
};

export default LogView;
