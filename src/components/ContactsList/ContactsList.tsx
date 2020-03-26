import * as React from 'react';
import {
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/core';
import useContacts from '../../hooks/useContacts';
import ContactAvatar from '../ContactAvatar/ContactAvatar';

const ContactsList: React.FC = () => {
  const [contacts, loading, error] = useContacts();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>😡 Well that sucks</AlertTitle>
        <AlertDescription>
          Something went wrong and we couldn't get your contacts.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      {contacts.map((uid) => (
        <ContactAvatar key={uid} uid={uid} />
      ))}
    </>
  );
};

export default ContactsList;
