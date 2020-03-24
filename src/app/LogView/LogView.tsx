import * as React from 'react';
import { Heading, Text, Spinner } from '@chakra-ui/core';

import useContacts from '../../hooks/useContacts';
import LogContactForm from './LogContactForm';

const LogView = () => {
  const [contacts, loading] = useContacts();
  // const { errors, touched, setFieldValue } = useLogContactForm({
  //   initialValues: {
  //     entryDate: new Date(),
  //     contactWith: []
  //   }
  // });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading>Contact</Heading>
      <Text fontSize="4xl">Who did you meet today?</Text>
      <LogContactForm contactOptions={contacts as string[]} />
    </>
  );
};

export default LogView;
