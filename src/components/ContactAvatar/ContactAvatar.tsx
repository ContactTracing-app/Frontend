import * as React from 'react';
import { Box, Avatar, Flex, Spinner } from '@chakra-ui/core';
import { useStores } from '../../hooks/useStore';
import { Person } from '../../stores/PersonStore';

interface ContactAvatarProps {
  uid: string;
}
const ContactAvatar: React.FC<ContactAvatarProps> = ({ uid }) => {
  const { personStore } = useStores();
  const [person, setPerson] = React.useState<Person>();
  personStore.getPerson(uid).then(setPerson);

  return (
    <Flex alignItems="center">
      {!person ? (
        <Spinner />
      ) : (
        <>
          <Avatar name={person.displayName} src={person.photoURL} />
          <Box
            ml="2"
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {person.displayName}
          </Box>
        </>
      )}
    </Flex>
  );
};

export default ContactAvatar;
