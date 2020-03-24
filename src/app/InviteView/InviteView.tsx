import * as React from 'react';
import {
  Heading,
  Spinner,
  Avatar,
  Button,
  Alert,
  AlertIcon
} from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import { useObjectVal } from 'react-firebase-hooks/database';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import { useParams } from '@reach/router';
import { useCreateKnowsMutation } from '../../__generated/graphql';

type params = {
  uid: string;
};

export interface Profile {
  displayName?: string;
  photoURL?: string;
}

const InviteView: React.FC<RouteComponentProps> = () => {
  const { uid }: params = useParams();
  const { profile } = useAuth();
  const [createKnowsMutation] = useCreateKnowsMutation();
  const [value, loading] = useObjectVal<Profile>(
    firebase.database().ref(`profiles/${uid}`)
  );
  const [isSuccessfullyConnected, setSuccessful] = React.useState<boolean>(
    false
  );

  if (loading) {
    return <Spinner />;
  }

  const displayName = value && value.displayName ? value.displayName : 'user';
  const photoURL = value && value.photoURL ? value.photoURL : null;
  const shouldShowConnectButton = profile?.uid !== uid;

  return (
    <>
      {isSuccessfullyConnected && (
        <Alert status="success">
          <AlertIcon />
          Successfully connected. You can now log contact with {displayName}.
        </Alert>
      )}
      <Heading>Connect with {displayName}</Heading>
      <Avatar name={displayName} src={photoURL} />
      {shouldShowConnectButton && (
        <Button
          onClick={() =>
            createKnowsMutation({
              variables: {
                fromUid: profile?.uid,
                toUid: uid
              }
            }).then(() => setSuccessful(true))
          }
        >
          Connect
        </Button>
      )}
    </>
  );
};

export default InviteView;
