import * as React from 'react';
import { Box, Avatar, Flex, Text, Spinner } from '@chakra-ui/core';
import { useObjectVal } from 'react-firebase-hooks/database';
import { firebase } from 'gatsby-theme-firebase';
import { Profile } from '../../app/InviteView/InviteView';

interface ContactAvatarProps {
  uid: string;
}
const ContactAvatar: React.FC<ContactAvatarProps> = ({ uid }) => {
  const [value, loading] = useObjectVal<Profile>(
    firebase.database().ref(`profiles/${uid}`)
  );
  const displayName =
    value && value.displayName ? value.displayName : 'Anonymous';
  const photoURL = value && value.photoURL ? value.photoURL : null;

  return (
    <Flex alignItems="center">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Avatar name={displayName} src={photoURL} />
          <Box
            ml="2"
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {displayName}
          </Box>
        </>
      )}
    </Flex>
  );
};

export default ContactAvatar;
