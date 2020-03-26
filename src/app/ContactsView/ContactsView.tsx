import * as React from 'react';
import { Heading } from '@chakra-ui/core';
import PageHeader from '../../components/PageHeader';
import ContactsList from '../../components/ContactsList';
import LogHistory from '../../components/LogHistory/LogHistory';

const ContactsView: React.FC = () => {
  return (
    <>
      <PageHeader
        heading="My Contacts"
        lead="The list of people you’ve been in contact."
      />
      <Heading mb={4} as="h2" size="lg">
        Connections
      </Heading>
      <ContactsList />

      <Heading mt={10} mb={4} as="h2" size="lg">
        Log History
      </Heading>
      <LogHistory />
    </>
  );
};

export default ContactsView;
