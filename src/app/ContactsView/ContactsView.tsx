import * as React from 'react';
import {
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle
} from '@chakra-ui/core';
import ContactAvatar from '../../components/ContactAvatar/ContactAvatar';
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
      <Heading>My Contacts</Heading>
      {contacts.map(uid => (
        <ContactAvatar key={uid} uid={uid} />
      ))}
    </>
  );
};

export default ContactsView;
