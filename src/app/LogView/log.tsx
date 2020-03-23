import * as React from 'react';

import { Heading, Text } from '@chakra-ui/core';
import LogContactForm, { ContactWith } from '../../forms/logContact';

const contactWithOptions: ContactWith[] = [
  {
    name: 'Michele M.',
    id: 'a'
  },
  {
    name: 'Ponk M.',
    id: 'b'
  },
  {
    name: 'Pob S.',
    id: 'c'
  },
  {
    name: 'Chris E.',
    id: 'd'
  }
];

const LogView = () => (
  <>
    <Heading>Contact</Heading>
    <Text fontSize="4xl">Who did you meet today?</Text>
    <LogContactForm contactOptions={contactWithOptions} />
  </>
);

export default LogView;
