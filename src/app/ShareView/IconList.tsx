import * as React from 'react';
import { Stack, Box } from '@chakra-ui/core';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';
import useProfileUrl from '../../hooks/useInviteUrl';

const IconList = () => {
  const { absoluteUrl: url } = useProfileUrl();
  const iconProps = {
    size: 32,
    round: true
  };
  const title = `Join me on Contact-Tracking and help each other stay safe.`;
  return (
    url && (
      <Stack isInline spacing={2} align="center" my={6}>
        <Box>
          <LineShareButton url={url} title={title}>
            <LineIcon {...iconProps} />
          </LineShareButton>
        </Box>
        <Box>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon {...iconProps} />
          </FacebookShareButton>
        </Box>
        <Box>
          <EmailShareButton url={url} subject={title} body="body">
            <EmailIcon {...iconProps} />
          </EmailShareButton>
        </Box>
        <Box>
          <WhatsappShareButton url={url}>
            <WhatsappIcon {...iconProps} />
          </WhatsappShareButton>
        </Box>
        <Box>
          <TwitterShareButton hashtags={['CTCovid19']} url={url} title={title}>
            <TwitterIcon {...iconProps} />
          </TwitterShareButton>
        </Box>
      </Stack>
    )
  );
};

export default IconList;
