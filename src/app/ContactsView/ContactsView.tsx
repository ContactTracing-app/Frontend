import * as React from 'react';
import { Heading } from '@chakra-ui/core';
import ContactAvatar from '../../components/ContactAvatar/ContactAvatar';

const ContactsView: React.FC = () => {
  return (
    <>
      <Heading>Contact</Heading>
      <ContactAvatar uid="ClJPFL6jhvZIOfozlq5l7rucd6S2" />
      <ContactAvatar uid="erQozVk1AtXJHVbAexu4ZyVNSur1" />
    </>
  );
};

export default ContactsView;
