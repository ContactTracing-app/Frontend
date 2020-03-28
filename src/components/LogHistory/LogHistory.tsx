import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { Accordion, Spinner, useToast } from '@chakra-ui/core';
import LogEntryAccordionItem from './LogEntryAccordionItem';
import {
  useLogHistoryLazyQuery,
  useUnlogContactMutation,
  LogHistoryDocument
} from '../../__generated/graphql';
import { useStores } from '../../hooks/useStore';
import toDateObject from '../../helpers/toDateObject';
import useAnalytics from '../../hooks/useAnalytics';

const LogHistory: React.FC = () => {
  const { contactUnlogged } = useAnalytics();
  const toast = useToast();
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

  const [unlogContact] = useUnlogContactMutation({
    onCompleted() {
      toast({
        position: 'bottom-right',
        title: 'Removed entry',
        status: 'success',
        isClosable: true
      });
      contactUnlogged();
    }
  });

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
        {logEntries.map(({ id, date, contactWith }) => {
          const logDate = new Date(date.formatted);
          return (
            <LogEntryAccordionItem
              key={id}
              date={logDate}
              contactWithUids={contactWith.map(({ uid }) => uid)}
              deleteHandler={(uidToDelete: string) =>
                unlogContact({
                  variables: {
                    input: {
                      fromUid: profile?.uid,
                      toUid: uidToDelete,
                      ...toDateObject(logDate)
                    }
                  },
                  refetchQueries: [
                    {
                      query: LogHistoryDocument,
                      variables: { uid: profile?.uid }
                    }
                  ]
                })
              }
            />
          );
        })}
      </Accordion>
    </>
  );
};

export default LogHistory;
