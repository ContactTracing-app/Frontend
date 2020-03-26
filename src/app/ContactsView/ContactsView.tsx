import * as React from 'react';
import { Spinner, Alert, AlertIcon, AlertTitle } from '@chakra-ui/core';
import ContactAvatar from '../../components/ContactAvatar/ContactAvatar';
import PageHeader from '../../components/PageHeader';
import useContacts from '../../hooks/useContacts';

const ContactsView: React.FC = () => {
  const [contacts, loading, error] = useContacts();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error</AlertTitle>
      </Alert>
    );
  }

  return (
    <>
      <PageHeader
        heading="My Contacts"
        lead="The list of people you’ve been in contact."
      />
      {contacts.map((uid) => (
        <ContactAvatar key={uid} uid={uid} />
      ))}
    </>
  );
};

export default ContactsView;
