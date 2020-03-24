import * as React from 'react';
import {
  Heading,
  Text,
  Spinner,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/core';
import useLogContactForm, { ContactWith } from './useLogContactForm';
import {
  ContactsForLogViewQuery,
  ContactsForLogViewDocument
} from '../../__generated/graphql';
import { useAuth } from 'gatsby-theme-firebase';
import { Field } from 'formik';
import DatePicker from 'react-date-picker';
import { useApolloClient } from '@apollo/client';

const contactWithOptions: ContactWith[] = [
  {
    name: 'Michele M.',
    id: 'a'
  },
  {
    name: 'Ponk M.',
    id: 'b'
  },
  {
    name: 'Pob S.',
    id: 'c'
  },
  {
    name: 'Chris E.',
    id: 'd'
  }
];

const LogView = () => {
  const { profile, isLoading } = useAuth();
  const client = useApolloClient();
  const { data, loading } = client.query<ContactsForLogViewQuery>({
    query: ContactsForLogViewDocument,
    variables: {
      uid: profile ? profile.uid : null
    }
  });

  // const { errors, touched, setFieldValue } = useLogContactForm({
  //   initialValues: {
  //     entryDate: new Date(),
  //     contactWith: []
  //   }
  // });

  if (isLoading || loading) {
    return <Spinner />;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Heading>Contact</Heading>
      <Text fontSize="4xl">Who did you meet today?</Text>
    </>
  );
};

export default LogView;
