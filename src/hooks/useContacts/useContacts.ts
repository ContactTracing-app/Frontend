import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { useContactsHookQuery } from '../../__generated/graphql';

const useContacts = () => {
  const { profile } = useAuth();
  const { data, loading, error } = useContactsHookQuery({
    variables: {
      uid: profile?.uid
    }
  });

  const contacts =
    data && data.Me && data.Me[0] && data.Me[0].contacts
      ? data.Me[0].contacts.map(({ uid }) => uid)
      : [];

  return [contacts, loading, error];
};

export default useContacts;
