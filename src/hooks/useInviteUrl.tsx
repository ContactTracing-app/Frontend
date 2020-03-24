import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query useProfileQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

type useInviteQuery = {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
};

interface useInviteUrl {
  uid?: string;
}
const useInviteUrl = (props?: useInviteUrl) => {
  const { profile } = useAuth();

  let uid;
  if (props && props.uid) {
    uid = props.uid;
  } else if (profile && profile.uid) {
    uid = profile.uid;
  }

  const {
    site: {
      siteMetadata: { siteUrl }
    }
  } = useStaticQuery<useProfileQuery>(query);
  const relativeUrl = `/app/invite/${profile?.uid}`;
  const absoluteUrl = `${siteUrl}${relativeUrl}`;
  return profile
    ? { absoluteUrl, relativeUrl }
    : { absoluteUrl: null, relativeUrl: null };
};

export default useInviteUrl;
