import * as React from 'react';
import { Box, Avatar, Flex, Spinner, AvatarProps } from '@chakra-ui/core';
import { useStores } from '../../hooks/useStore';
import { Person } from '../../stores/PersonStore';

interface ContactAvatarProps {
  uid: string;
  avatar?: AvatarProps;
}
const ContactAvatar: React.FC<ContactAvatarProps> = ({ uid, avatar }) => {
  const { personStore } = useStores();
  const [person, setPerson] = React.useState<Person>();
  personStore.getPerson(uid).then(setPerson);

  return (
    <Flex alignItems="center">
      {!person ? (
        <Spinner />
      ) : (
        <>
          <Avatar name={person.displayName} src={person.photoURL} {...avatar} />
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
