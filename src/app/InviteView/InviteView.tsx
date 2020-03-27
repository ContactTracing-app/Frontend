import * as React from 'react';
import {
  Spinner,
  Avatar,
  Button,
  useToast,
  AvatarGroup,
  Text
} from '@chakra-ui/core';
import {
  RouteComponentProps,
  useParams,
  navigate,
  useLocation
} from '@reach/router';
import { useObjectVal } from 'react-firebase-hooks/database';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import { useCreateKnowsMutation } from '../../__generated/graphql';
import PageHeader from '../../components/PageHeader';
import useAnalytics from '../../hooks/useAnalytics';
import icon from '../../images/favicon.png';

type params = {
  uid: string;
};

const InviteView: React.FC<RouteComponentProps> = () => {
  const { connectionMade } = useAnalytics();
  const { uid }: params = useParams();
  const location = useLocation();
  const toast = useToast();
  const { profile } = useAuth();
  const [value, loading] = useObjectVal<Profile>(
    firebase.database().ref(`profiles/${uid}`)
  );
  const [createKnowsMutation] = useCreateKnowsMutation({
    onCompleted() {
      connectionMade();
      toast({
        position: 'bottom-right',
        title: 'Connected',
        description: `You can now log contact with ${value.displayName} 😎`,
        status: 'success',
        isClosable: true
      });
    }
  });

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

      <AvatarGroup size="xl" max={2} mb={12}>
        <Avatar name={displayName} src={photoURL} />
        <Avatar bg="none" name="Contact Tracing" src={icon} />
      </AvatarGroup>
      {shouldShowConnectButton && (
        <Button
          width="200px"
          variantColor="teal"
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
