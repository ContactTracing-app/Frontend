import * as React from 'react';
import { Heading, Spinner, Avatar } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import { useObjectVal } from 'react-firebase-hooks/database';
import { firebase } from 'gatsby-theme-firebase';
import { useParams } from '@reach/router';

type params = {
  uid: string;
};

interface Profile {
  displayName?: string;
  photoURL?: string;
}

const InviteView: React.FC<RouteComponentProps> = () => {
  const { uid }: params = useParams();
  const [value, loading] = useObjectVal<Profile>(
    firebase.database().ref(`profiles/${uid}`)
  );

  if (loading) {
    return <Spinner />;
  }

  const displayName = value && value.displayName ? value.displayName : 'user';
  const photoURL = value && value.photoURL ? value.photoURL : null;

  return (
    <>
      <Heading>Connect with {displayName}</Heading>
      <Avatar name={displayName} src={photoURL} />
    </>
  );
};

export default InviteView;
