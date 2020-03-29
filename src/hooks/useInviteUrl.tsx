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

type UseInviteQuery = {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
};

interface UseInviteUrl {
  uid?: string;
}
const useInviteUrl = (props?: UseInviteUrl) => {
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
  } = useStaticQuery<UseInviteQuery>(query);
  const relativeUrl = `/me/invite/${uid}`;
  const absoluteUrl = `${siteUrl}${relativeUrl}`;
  return profile
    ? { absoluteUrl, relativeUrl }
    : { absoluteUrl: null, relativeUrl: null };
};

export default useInviteUrl;
