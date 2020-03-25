import * as React from 'react';
import { Spinner, Alert, AlertIcon, AlertTitle } from '@chakra-ui/core';
import ContactAvatar from '../../components/ContactAvatar/ContactAvatar';
import PageHeader from '../../components/PageHeader';

const ContactsView: React.FC = () => {
  const contacts = ['erQozVk1AtXJHVbAexu4ZyVNSur1'];

  // if (loading) {
  //   return <Spinner />;
  // }

  // if (error) {
  //   return (
  //     <Alert status="error">
  //       <AlertIcon />
  //       <AlertTitle mr={2}>Error</AlertTitle>
  //     </Alert>
  //   );
  // }

  return (
    <>
      <PageHeader heading="Contacts" lead="Line of text here" />
      {contacts.map((uid) => (
        <ContactAvatar key={uid} uid={uid} />
      ))}
    </>
  );
};

export default ContactsView;
