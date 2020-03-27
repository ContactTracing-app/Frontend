import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { useContactsLazyQuery } from '../../__generated/graphql';
import { useStores } from '../useStore';

const useContacts = () => {
  const { personStore } = useStores();
  const { profile, isLoading: isLoadingProfile } = useAuth();
  const [
    loadContacts,
    { data, loading: isLoadingQuery, error }
  ] = useContactsLazyQuery({
    onCompleted(TData) {
      const contactIds = TData.contacts.map(({ uid }) => uid);
      personStore.getPeople(contactIds);
    }
  });

  React.useEffect(() => {
    if (profile?.uid) {
      loadContacts({
        variables: { uid: profile.uid }
      });
    }
  }, [profile]);

  const loading = isLoadingProfile || isLoadingQuery;
  const contacts = data?.contacts.map(({ uid }) => uid) as
    | string[]
    | null;

  return [contacts, loading, error];
};

export default useContacts;
