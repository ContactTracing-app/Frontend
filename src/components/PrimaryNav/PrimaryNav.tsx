import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TiFlowSwitch, TiUser, TiThermometer, TiHome } from 'react-icons/ti';
import { useAuth } from 'gatsby-theme-firebase';
import useProfileUrl from '../../helpers/useProfileUrl';
import NavButton from './NavButton';

const query = graphql`
  query PrimaryNav {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`;

interface QueryResult {
  navigation: {
    nodes: {
      name: string;
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
          Icon={TiHome}
          to={item.link}
          label={item.name}
        />
      ))}
      {isLoggedIn && [
        <NavButton
          key="nav-log"
          Icon={TiThermometer}
          to="/app/log"
          label="Log Contact"
        />,
        <NavButton
          key="nav-connections"
          Icon={TiFlowSwitch}
          to="/app/connections"
          label="Connections"
        />
      ]}
      {relativeUrl && (
        <NavButton Icon={TiUser} to={relativeUrl} label="Profile" />
      )}
    </>
  );
};

export default PrimaryNav;
