import * as React from 'react';
import { Box, Avatar, Flex, Skeleton, AvatarProps } from '@chakra-ui/core';
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
    <Skeleton isLoaded={!!person}>
      {person && (
        <Flex height={12} width="auto" alignItems="center">
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
        </Flex>
      )}
    </Skeleton>
  );
};

export default ContactAvatar;
