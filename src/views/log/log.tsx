import * as React from 'react';

import { Heading, Text, Divider } from '@chakra-ui/core';
import LogContactForm from '../../forms/logContact';

const LogView = () => {
  const [contactDate, setContactDate] = React.useState<any>(null);
  const [dateIsFocused, setDateIsFocused] = React.useState<boolean>(false);
  return (
    <div>
      <Heading>Contact</Heading>
      <Text fontSize="4xl">Who'd you meet today?</Text>

      <Divider />

      <Divider />
      <LogContactForm />
    </div>
  );
};

export default LogView;
