import * as React from 'react';
import { Heading, Text } from '@chakra-ui/core';
import { useParams } from '@reach/router';

type params = {
  uid: string;
};
const ProfileView = () => {
  const params: params = useParams();
  return (
    <div>
      <Heading>You are</Heading>
      <pre>
        <code>{params.uid}</code>
      </pre>

      <Text fontSize="4xl">
        Share this page with your friends &amp; family to connect.
      </Text>

      <ul>
        <li>Whatsapp</li>
        <li>LINE</li>
        <li>Facebook</li>
      </ul>
    </div>
  );
};

export default ProfileView;
