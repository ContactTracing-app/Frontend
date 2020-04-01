import * as React from 'react';
import { Stack, Box } from '@chakra-ui/core';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
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

interface IconListQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}
const query = graphql`
  query IconList {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const IconList = () => {
  const {
    site: {
      siteMetadata: { title: siteTitle }
    }
  } = useStaticQuery<IconListQuery>(query);
  const intl = useIntl();
  const { absoluteUrl: url } = useProfileUrl();
  const iconProps = {
    size: 32,
    round: true
  };
  const title = intl.formatMessage({ id: 'Icon.title', values: { siteTitle } });
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
          <EmailShareButton
            url={url}
            subject={`Stay safe on ${siteTitle}`}
            body={title}
          >
            <EmailIcon {...iconProps} />
          </EmailShareButton>
        </Box>
        <Box>
          <WhatsappShareButton title={title} url={url}>
            <WhatsappIcon {...iconProps} />
          </WhatsappShareButton>
        </Box>
        <Box>
          <TwitterShareButton
            hashtags={['keeptracingcovid19']}
            url={url}
            title={title}
          >
            <TwitterIcon {...iconProps} />
          </TwitterShareButton>
        </Box>
      </Stack>
    )
  );
};

export default IconList;
