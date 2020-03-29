import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as Icons from 'react-icons/md';
import { useAuth } from 'gatsby-theme-firebase';
import { Divider } from '@chakra-ui/core';
import NavButton from './NavButton';
import ProfileButton from './ProfileButton';
import LogoutButton from './LogoutButton';
import SigninButton from './SigninButton';
import ExternalNavButton from './ExternalNavButton';

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

  const me = profile?.displayName ? profile?.displayName : profile?.email!;

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
      <ExternalNavButton
        Icon={Icons['MdLibraryBooks']}
        to="https://bit.ly/3bDFlv1"
        label="Press"
      />
      <Divider />
      {isLoggedIn
        ? [
            <ProfileButton key="nav-profile" to="/me" label={me} />,
            <NavButton
              key="nav-log"
              Icon={Icons.MdEdit}
              to="/me/log"
              label="Log Contact"
            />,
            <NavButton
              key="nav-contacts"
              Icon={Icons.MdGroup}
              to="/me/contacts"
              label="Contacts"
            />,
            <NavButton
              key="nav-share"
              Icon={Icons.MdShare}
              to="/me/share"
              label="Share"
            />,
            <NavButton
              key="nav-settings"
              Icon={Icons.MdSettings}
              to="/me/settings"
              label="Settings"
            />,
            <LogoutButton key="nav-logout" Icon={Icons.MdPowerSettingsNew} />
          ]
        : [<SigninButton key="nav-login" Icon={Icons.MdPowerSettingsNew} />]}
    </>
  );
};

export default PrimaryNav;
