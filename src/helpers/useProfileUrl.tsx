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

type useProfileQuery = {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
};

const useProfileUrl = () => {
  const { profile } = useAuth();
  const {
    site: {
      siteMetadata: { siteUrl }
    }
  } = useStaticQuery<useProfileQuery>(query);
  const relativeUrl = `/app/profile/${profile?.uid}`;
  const absoluteUrl = `${siteUrl}${relativeUrl}`;
  return profile
    ? { absoluteUrl, relativeUrl }
    : { absoluteUrl: null, relativeUrl: null };
};

export default useProfileUrl;
