import * as React from 'react';
import { Spinner, Heading } from '@chakra-ui/core';
import { useApolloClient } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import PageHeader from '../../components/PageHeader';
import { useTestQuery } from '../../__generated/graphql';

const TestView = () => {
  const { loading, data, error } = useTestQuery({
    variables: {
      uid: 'erQozVk1AtXJHVbAexu4ZyVNSur1'
    }
  });

  const client = useApolloClient();
  const cacheData = client.readQuery({
    query: gql`
      query testCache {
        Person(uid: "erQozVk1AtXJHVbAexu4ZyVNSur1") {
          uid
        }
      }
    `
  });

  if (!loading) {
    <Spinner />;
  }

  return (
    <>
      <PageHeader
        heading="Test Page 2"
        lead="Getting firebase and apollo client to place nice."
      />
      <Heading>Not cached</Heading>
      <pre>{JSON.stringify(data || error, null, 2)}</pre>
      <Heading>Cached</Heading>
      <pre>{JSON.stringify(cacheData, null, 2)}</pre>
    </>
  );
};

export default TestView;
