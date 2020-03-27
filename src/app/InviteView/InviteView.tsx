import * as React from 'react';
import { Spinner, Avatar, Button, useToast } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import { useObjectVal } from 'react-firebase-hooks/database';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import { useParams, navigate, useLocation } from '@reach/router';
import { useCreateKnowsMutation } from '../../__generated/graphql';
import PageHeader from '../../components/PageHeader';
import useAnalytics from '../../hooks/useAnalytics';

type params = {
  uid: string;
};

const InviteView: React.FC<RouteComponentProps> = () => {
  const { connectionMade } = useAnalytics();
  const { uid }: params = useParams();
  const location = useLocation();
  const toast = useToast();
  const { profile } = useAuth();
  const [createKnowsMutation] = useCreateKnowsMutation({
    onCompleted() {
      connectionMade();
      toast({
        position: 'bottom-right',
        title: 'Connected',
        description: `You can now log contact with ${value.displayName}`,
        status: 'success',
        isClosable: true
      });
    }
  });
  const [value, loading] = useObjectVal<Profile>(
    firebase.database().ref(`profiles/${uid}`)
  );

  if (loading) {
    return <Spinner />;
  }

  const displayName = value && value.displayName ? value.displayName : 'user';
  const photoURL = value && value.photoURL ? value.photoURL : null;
  const shouldShowConnectButton = profile?.uid !== uid;

  return (
    <>
      <PageHeader
        heading="You’re invited!"
        lead={`${displayName} invites you to join Contact Tracing.`}
      />

      <Avatar name={displayName} src={photoURL} />
      {shouldShowConnectButton && (
        <Button
          onClick={() => {
            if (!profile) {
              navigate('/app/login', {
                state: {
                  next_url: location.pathname
                }
              });
              return;
            }

            createKnowsMutation({
              variables: {
                fromUid: profile?.uid,
                toUid: uid
              }
            });
          }}
        >
          Connect
        </Button>
      )}
    </>
  );
};

export default InviteView;
