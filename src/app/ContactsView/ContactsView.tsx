import * as React from 'react';
import {
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle
} from '@chakra-ui/core';
import { useAuth } from 'gatsby-theme-firebase';
import ContactAvatar from '../../components/ContactAvatar/ContactAvatar';
import { useContactsForContactsViewQuery } from '../../__generated/graphql';

const ContactsView: React.FC = () => {
  const { profile, isLoading } = useAuth();
  const { data, loading, error } = useContactsForContactsViewQuery({
    variables: {
      uid: profile?.uid
    }
  });

  if (isLoading || loading) {
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

  const contactsIds =
    data && data.Me && data.Me[0] && data.Me[0].contacts
      ? data.Me[0].contacts.map(contact => contact!.uid)
      : [];

  return (
    <>
      <Heading>Contact</Heading>
      {contactsIds.map(uid => (
        <ContactAvatar key={uid} uid={uid} />
      ))}
    </>
  );
};

export default ContactsView;
