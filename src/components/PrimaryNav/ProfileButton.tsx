import * as React from 'react';
import { Flex, Heading, Avatar } from '@chakra-ui/core';
import { PartialNavLink, NavButtonProps } from './NavButton';
import { useAuth } from 'gatsby-theme-firebase';

type ProfileButton = Omit<NavButtonProps, 'Icon'>;

const ProfileButton: React.FC<ProfileButton> = ({ to, label }) => {
  const { profile } = useAuth();
  const displayName = profile?.displayName
    ? profile.displayName
    : profile?.email;
  const photoURL = profile?.photoURL;
  return (
    <PartialNavLink to={to}>
      <Flex alignItems="center" p={4}>
        <Avatar mr={3} size="sm" name={displayName} src={photoURL} />
        <Heading as="span" size="sm">
          {label}
        </Heading>
      </Flex>
    </PartialNavLink>
  );
};

export default ProfileButton;
