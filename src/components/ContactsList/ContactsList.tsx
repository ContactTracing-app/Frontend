import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Spinner, Stack, Box, useToast, Text } from '@chakra-ui/core';
import useContacts from '../../hooks/useContacts';
import ContactAvatar from '../ContactAvatar/ContactAvatar';

const ContactsList: React.FC = () => {
  const { contacts, loading, error } = useContacts();
  const toast = useToast();
  const intl = useIntl();

  if (error) {
    toast({
      title: intl.formatMessage({ id: 'ContactList.heading' }),
      description: intl.formatMessage({ id: 'ContactList.msg' }),
      status: 'error',
      isClosable: true
    });
    return (
      <Text>
        <span role="img" aria-label="angry">
          😡
        </span>
      </Text>
    );
  }

  return (
    <Stack spacing={2}>
      {loading && <Spinner />}
      {contacts && contacts.length && (
        contacts.map((uid) => (
          <Box key={uid}>
            <ContactAvatar uid={uid} />
          </Box>
        ))
      )}
      {!loading && !error && !contacts?.length && (
        // TODO: use i18n
        <div>You have no contacts</div>
      )}
    </Stack>
  );
};

export default ContactsList;
