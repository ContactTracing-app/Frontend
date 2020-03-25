import * as React from 'react';
import { Stack } from '@chakra-ui/core';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WeiboIcon,
  WeiboShareButton,
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
      <Stack isInline spacing={8} align="center">
        <LineShareButton url={url} title={title}>
          <LineIcon {...iconProps} />
        </LineShareButton>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon {...iconProps} />
        </FacebookShareButton>
        <EmailShareButton url={url} subject={title} body="body">
          <EmailIcon {...iconProps} />
        </EmailShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon {...iconProps} />
        </WhatsappShareButton>
        <TwitterShareButton hashtags={['CTCovid19']} url={url} title={title}>
          <TwitterIcon {...iconProps} />
        </TwitterShareButton>
        <WeiboShareButton
          url={url}
          title={title}
          // image={`${String(window.location)}/${exampleImage}`}
        >
          <WeiboIcon {...iconProps} />
        </WeiboShareButton>
        <RedditShareButton
          url={url}
          title={title}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon {...iconProps} />
        </RedditShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon {...iconProps} />
        </LinkedinShareButton>
      </Stack>
    )
  );
};

export default IconList;
