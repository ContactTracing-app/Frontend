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
  const { isLoggedIn, profile } = useAuth();
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
      {isLoggedIn ? (
        <>
          <NavButton Icon={TiThermometer} to="/app/log" label="Log Contact" />
          <NavButton
            Icon={TiFlowSwitch}
            to="/app/connections"
            label="Connections"
          />
          <NavButton Icon={TiUser} to={relativeUrl} label="Profile" />
        </>
      ) : null}
    </>
  );
};

export default PrimaryNav;
