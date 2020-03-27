import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as Icons from 'react-icons/md';
import { useAuth } from 'gatsby-theme-firebase';
import { Divider } from '@chakra-ui/core';
import useProfileUrl from '../../hooks/useInviteUrl';
import NavButton from './NavButton';
import ProfileButton from './ProfileButton';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

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
  const { isLoggedIn, profile } = useAuth();

  const me = profile?.displayName
    ? profile?.displayName
    : profile?.email!;

  return (
    <>
      {nodes.map((item) => (
        <NavButton
          key={item.link}
          Icon={Icons[item.icon]}
          to={item.link}
          label={item.name}
        />
      ))}
      <Divider />
      {isLoggedIn
        ? [
            <ProfileButton
            key="nav-profile"
            to="/app/profile"
            label={me}
          />,
            <NavButton
              key="nav-log"
              Icon={Icons.MdEdit}
              to="/app/log"
              label="Log Contact"
            />,
            <NavButton
              key="nav-contacts"
              Icon={Icons.MdGroup}
              to="/app/contacts"
              label="Contacts"
            />,
            <NavButton
              key="nav-share"
              Icon={Icons.MdShare}
              to="/app/share"
              label="Share"
            />,
            <NavButton
              key="nav-settings"
              Icon={Icons.MdSettings}
              to="/app/settings"
              label="Settings"
            />,
            <LogoutButton
            key="nav-logout"
            Icon={Icons.MdPowerSettingsNew}
          />
          ]
        : [
          <LoginButton
            key="nav-login"
            Icon={Icons.MdPowerSettingsNew}
          />
        ]}
    </>
  );
};

export default PrimaryNav;
