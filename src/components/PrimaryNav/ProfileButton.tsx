import * as React from 'react';
import { Flex, Heading, Avatar } from '@chakra-ui/core';
import { useAuth } from 'gatsby-theme-firebase';
import { PartialNavLink, NavButtonProps } from './NavButton';

type ProfileButton = Omit<NavButtonProps, 'Icon'>;

const ProfileButton: React.FC<ProfileButton> = ({ to, label }) => {
  const { profile } = useAuth();
  const displayName = profile?.displayName
    ? profile.displayName
    : profile?.email;
  const photoURL = profile?.photoURL;
  return (
    <PartialNavLink to={to}>
      <Flex
        alignItems="center"
        justifyContent={['center', 'flex-start']}
        p={4}
      >
        <Avatar
          mr={[0, 3]}
          size="sm"
          name={displayName}
          src={photoURL}
        />
        <Heading
          maxW="7em"
          isTruncated
          display={['none', 'inline-block']}
          as="span"
          size="sm"
        >
          {label}
        </Heading>
      </Flex>
    </PartialNavLink>
  );
};

export default ProfileButton;
