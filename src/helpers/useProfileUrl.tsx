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
  const url = profile ? `${siteUrl}/app/profile/${profile.uid}` : null;
  return [url];
};

export default useProfileUrl;
