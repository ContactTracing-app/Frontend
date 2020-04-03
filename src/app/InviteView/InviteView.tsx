import * as React from 'react';
import {
  Spinner,
  Avatar,
  Button,
  useToast,
  AvatarGroup,
  Heading,
  List,
  ListItem
} from '@chakra-ui/core';
import { RouteComponentProps, useParams, useLocation } from '@reach/router';
import { useObjectVal } from 'react-firebase-hooks/database';
import { navigate, useIntl, FormattedMessage } from 'gatsby-plugin-intl';
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
  const intl = useIntl();
  const { profile } = useAuth();
  const [value, loading] = useObjectVal<Profile>(
    firebase.database().ref(`profiles/${uid}`)
  );
  const [
    createKnowsMutation,
    { loading: isLoadingConnection }
  ] = useCreateKnowsMutation({
    onCompleted() {
      connectionMade();
      toast({
        position: 'bottom-right',
        title: intl.formatMessage({ id: 'InviteView.Connected' }),
        description: intl.formatMessage(
          {
            id: 'InviteView.Connected-Description'
          },
          {
            name: value.displayName
          }
        ),
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
        heading={intl.formatMessage({ id: 'InviteView.heading' })}
        lead={intl.formatMessage(
          {
            id: 'InviteView.lead'
          },
          {
            name: value.displayName
          }
        )}
      />

      <AvatarGroup size="xl" max={2} mb={12}>
        <Avatar name={displayName} src={photoURL} />
        <Avatar bg="none" name="Contact Tracing" src={icon} />
      </AvatarGroup>
      {shouldShowConnectButton && (
        <Button
          isLoading={isLoadingConnection}
          width="200px"
          mb={16}
          variantColor="teal"
          onClick={() => {
            if (!profile) {
              navigate(`/me/sign-in?next=${location.pathname}`);
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
          <FormattedMessage id="InviteView.Connect-button" />
        </Button>
      )}
      <Heading as="h3" mb={2} size="lg">
        <FormattedMessage id="InviteView.why-use" />
      </Heading>
      <List styleType="disc">
        <ListItem>
          <FormattedMessage id="InviteView.why-1" />
        </ListItem>
        <ListItem>
          <FormattedMessage id="InviteView.why-2" />
        </ListItem>
        <ListItem>
          <FormattedMessage id="InviteView.why-3" />
        </ListItem>
      </List>
    </>
  );
};

export default InviteView;
