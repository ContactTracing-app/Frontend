import * as React from 'react';
import { Box, Avatar, Flex, Text, Spinner } from '@chakra-ui/core';
import withPerson from '../../hooks/withPerson';

interface ContactAvatarProps {
  uid: string;
}
const ContactAvatar: React.FC<ContactAvatarProps> = ({ uid }) => {
  const [person, loading] = withPerson({ uid });
  return (
    <Flex alignItems="center">
      {loading ? (
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
