import * as React from 'react';
import {
  Avatar,
  AvatarGroup,
  Button,
  Heading,
  List,
  ListItem,
  Spinner,
  useToast
} from '@chakra-ui/core';
import {
  RouteComponentProps,
  useParams,
  navigate,
  useLocation
} from '@reach/router';
import { useObjectVal } from 'react-firebase-hooks/database';
import { useTranslation } from 'react-i18next';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import { useCreateKnowsMutation } from '../../__generated/graphql';
import PageHeader from '../../components/PageHeader';
import useAnalytics from '../../hooks/useAnalytics';
import icon from '../../images/favicon.png';

type params = {
  uid: string;
};

const InviteView: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation(['InviteView', 'common']);
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
          mb={16}
          variantColor="teal"
          onClick={() => {
            if (!profile) {
              navigate('/me/sign-in', {
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
      <Heading as="h3" mb={2} size="lg">
        {t('whyHeading')}
      </Heading>
      <List styleType="disc">
        <ListItem>Protect people you love</ListItem>
        <ListItem>Limit the spread of COVID-19</ListItem>
        <ListItem>
          Save time to trace back and immediately notify your contacts if
          needed, in one click.
        </ListItem>
      </List>
    </>
  );
};

export default InviteView;
