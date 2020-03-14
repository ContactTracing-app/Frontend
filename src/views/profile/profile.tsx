import * as React from 'react';
import { Heading, Text, Stack } from '@chakra-ui/core';
import { useParams } from '@reach/router';
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LineIcon,
  EmailIcon
} from 'react-share';
import useProfileUrl from '../../helpers/useProfileUrl';

type params = {
  uid: string;
};
const ProfileView = () => {
  const params: params = useParams();
  const [url] = useProfileUrl();
  const iconSize = 32;
  return (
    url && (
      <>
        <Heading>You are</Heading>
        <pre>
          <code>{params.uid}</code>
        </pre>

        <Text fontSize="4xl">
          Share this page with your friends &amp; family to connect.
        </Text>
        <Stack isInline spacing={8} align="center">
          <LineShareButton url={url} title={'title'}>
            <LineIcon size={iconSize} round />
          </LineShareButton>

          <EmailShareButton url={url} subject={'title'} body="body">
            <EmailIcon size={iconSize} round />
          </EmailShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={iconSize} round />
          </WhatsappShareButton>
        </Stack>
      </>
    )
  );
};

export default ProfileView;
