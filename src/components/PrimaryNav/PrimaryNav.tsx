import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as Icons from 'react-icons/ti';
import { useAuth } from 'gatsby-theme-firebase';
import useProfileUrl from '../../helpers/useProfileUrl';
import NavButton from './NavButton';

const query = graphql`
  query PrimaryNav {
    navigation: allNavigationYaml {
      nodes {
        name
        icon
        link
      }
    }
  }
`;

interface QueryResult {
  navigation: {
    nodes: {
      name: string;
      icon: string;
      link: string;
    }[];
  };
}

const PrimaryNav: React.FC = () => {
  const {
    navigation: { nodes }
  } = useStaticQuery<QueryResult>(query);
  const { isLoggedIn } = useAuth();
  const { relativeUrl } = useProfileUrl();

  return (
    <>
      {nodes.map(item => (
        <NavButton
          key={item.link}
          Icon={Icons[item.icon]}
          to={item.link}
          label={item.name}
        />
      ))}
      {isLoggedIn && [
        <NavButton
          key="nav-log"
          Icon={Icons.TiThermometer}
          to="/app/log"
          label="Log Contact"
        />,
        <NavButton
          key="nav-connections"
          Icon={Icons.TiFlowSwitch}
          to="/app/connections"
          label="Connections"
        />
      ]}
      {relativeUrl && (
        <NavButton Icon={Icons.TiUser} to={relativeUrl} label="Profile" />
      )}
    </>
  );
};

export default PrimaryNav;
