import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { Accordion, Spinner } from '@chakra-ui/core';
import LogEntryAccordionItem from './LogEntryAccordionItem';
import { useLogHistoryLazyQuery } from '../../__generated/graphql';
import { useStores } from '../../hooks/useStore';

const LogHistory: React.FC = () => {
  const { profile, isLoading: isLoadingProfile } = useAuth();
  const { personStore } = useStores();
  const [
    getLogHistory,
    { data, loading: isLoadingQuery, error }
  ] = useLogHistoryLazyQuery({
    onCompleted(TData) {
      const contactIds = TData.logEntries.map(({ uid }) => uid);
      personStore.getPeople(contactIds);
    }
  });

  React.useEffect(() => {
    if (profile?.uid) {
      getLogHistory({
        variables: { uid: profile.uid }
      });
    }
  }, [profile]);

  if (error) {
    return <>error</>;
  }

  const loading = isLoadingProfile || isLoadingQuery;

  if (loading) {
    return <Spinner />;
  }

  const logEntries = data && data.logEntries ? data.logEntries : [];

  return (
    <>
      <Accordion>
        {logEntries.map(({ id, date, contactWith }) => (
          <LogEntryAccordionItem
            key={id}
            date={new Date(date.formatted)}
            contactWithUids={contactWith.map(({ uid }) => uid)}
          />
        ))}
      </Accordion>
    </>
  );
};

export default LogHistory;
