import { useAuth } from 'gatsby-theme-firebase';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

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
  const { locale } = useIntl();

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
  const relativeUrl = `/${locale}/me/invite/${uid}`;
  const absoluteUrl = `${siteUrl}${relativeUrl}`;
  return profile
    ? { absoluteUrl, relativeUrl }
    : { absoluteUrl: null, relativeUrl: null };
};

export default useInviteUrl;
