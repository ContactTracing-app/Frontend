import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type _Neo4jDate = {
   __typename?: '_Neo4jDate';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateTime = {
   __typename?: '_Neo4jDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTime = {
   __typename?: '_Neo4jLocalDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTime = {
   __typename?: '_Neo4jLocalTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jPoint = {
   __typename?: '_Neo4jPoint';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

export type _Neo4jPointInput = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export type _Neo4jTime = {
   __typename?: '_Neo4jTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _PersonFilter = {
  AND?: Maybe<Array<_PersonFilter>>;
  OR?: Maybe<Array<_PersonFilter>>;
  uid?: Maybe<Scalars['ID']>;
  uid_not?: Maybe<Scalars['ID']>;
  uid_in?: Maybe<Array<Scalars['ID']>>;
  uid_not_in?: Maybe<Array<Scalars['ID']>>;
  uid_contains?: Maybe<Scalars['ID']>;
  uid_not_contains?: Maybe<Scalars['ID']>;
  uid_starts_with?: Maybe<Scalars['ID']>;
  uid_not_starts_with?: Maybe<Scalars['ID']>;
  uid_ends_with?: Maybe<Scalars['ID']>;
  uid_not_ends_with?: Maybe<Scalars['ID']>;
  isInfected?: Maybe<Scalars['Boolean']>;
  isInfected_not?: Maybe<Scalars['Boolean']>;
  isInQuarantine?: Maybe<Scalars['Boolean']>;
  isInQuarantine_not?: Maybe<Scalars['Boolean']>;
};

export type _PersonInput = {
  uid: Scalars['ID'];
};

export enum _PersonOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  UidAsc = 'uid_asc',
  UidDesc = 'uid_desc',
  IsInfectedAsc = 'isInfected_asc',
  IsInfectedDesc = 'isInfected_desc',
  IsInQuarantineAsc = 'isInQuarantine_asc',
  IsInQuarantineDesc = 'isInQuarantine_desc'
}

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}

export type CreateKnowsInput = {
  fromUid: Scalars['ID'];
  toUid: Scalars['ID'];
};

export type CreatePersonInput = {
  uid: Scalars['ID'];
};

export type LogContactInput = {
  fromUid: Scalars['ID'];
  toUid: Scalars['ID'];
  yyyy: Scalars['String'];
  mm: Scalars['String'];
  dd: Scalars['String'];
};

export type LogEntry = {
   __typename?: 'LogEntry';
  id: Scalars['ID'];
  date: _Neo4jDateTime;
  contactWith: Array<Maybe<Person>>;
};


export type LogEntryContactWithArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  CreateKnows?: Maybe<Person>;
  HidePerson?: Maybe<Person>;
  ShowPerson?: Maybe<Person>;
  CreatePerson?: Maybe<Person>;
  UnlogContact?: Maybe<LogEntry>;
  LogContact?: Maybe<LogEntry>;
  UpdatePerson?: Maybe<Person>;
  DeletePerson?: Maybe<Person>;
  MergePerson?: Maybe<Person>;
};


export type MutationCreateKnowsArgs = {
  input: CreateKnowsInput;
};


export type MutationHidePersonArgs = {
  input: PersonVisibilityInput;
};


export type MutationShowPersonArgs = {
  input: PersonVisibilityInput;
};


export type MutationCreatePersonArgs = {
  input: CreatePersonInput;
};


export type MutationUnlogContactArgs = {
  input: LogContactInput;
};


export type MutationLogContactArgs = {
  input: LogContactInput;
};


export type MutationUpdatePersonArgs = {
  uid: Scalars['ID'];
  isInfected?: Maybe<Scalars['Boolean']>;
  isInQuarantine?: Maybe<Scalars['Boolean']>;
};


export type MutationDeletePersonArgs = {
  uid: Scalars['ID'];
};


export type MutationMergePersonArgs = {
  uid: Scalars['ID'];
  isInfected?: Maybe<Scalars['Boolean']>;
  isInQuarantine?: Maybe<Scalars['Boolean']>;
};

export type Person = {
   __typename?: 'Person';
  _id?: Maybe<Scalars['String']>;
  uid: Scalars['ID'];
  isInfected: Scalars['Boolean'];
  isInQuarantine: Scalars['Boolean'];
  knows?: Maybe<Array<Maybe<Person>>>;
  logEntries: Array<Maybe<LogEntry>>;
  recentDirectContactWith?: Maybe<Array<Maybe<Person>>>;
  recentIndirectContactWith?: Maybe<Array<Maybe<Person>>>;
};


export type PersonKnowsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>;
};


export type PersonRecentDirectContactWithArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>;
};


export type PersonRecentIndirectContactWithArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>;
};

export type PersonVisibilityInput = {
  uid: Scalars['ID'];
};

export type Query = {
   __typename?: 'Query';
  Person?: Maybe<Array<Maybe<Person>>>;
};


export type QueryPersonArgs = {
  _id?: Maybe<Scalars['ID']>;
  uid?: Maybe<Scalars['ID']>;
  isInfected?: Maybe<Scalars['Boolean']>;
  isInQuarantine?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>;
  filter?: Maybe<_PersonFilter>;
};

export type CreateKnowsMutationVariables = {
  fromUid: Scalars['ID'];
  toUid: Scalars['ID'];
};


export type CreateKnowsMutation = (
  { __typename?: 'Mutation' }
  & { CreateKnows?: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'uid'>
  )> }
);

export type LogContactMutationVariables = {
  input: LogContactInput;
};


export type LogContactMutation = (
  { __typename?: 'Mutation' }
  & { LogContact?: Maybe<(
    { __typename?: 'LogEntry' }
    & Pick<LogEntry, 'id'>
  )> }
);

export type TestQueryVariables = {
  uid: Scalars['ID'];
};


export type TestQuery = (
  { __typename?: 'Query' }
  & { Me?: Maybe<Array<Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'uid'>
  )>>> }
);

export type ContactsHookQueryVariables = {
  uid: Scalars['ID'];
};


export type ContactsHookQuery = (
  { __typename?: 'Query' }
  & { Me?: Maybe<Array<Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'uid'>
    & { contacts?: Maybe<Array<Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'uid'>
    )>>> }
  )>>> }
);


export const CreateKnowsDocument = gql`
    mutation CreateKnows($fromUid: ID!, $toUid: ID!) {
  CreateKnows(input: {fromUid: $fromUid, toUid: $toUid}) {
    uid
  }
}
    `;
export type CreateKnowsMutationFn = ApolloReactCommon.MutationFunction<CreateKnowsMutation, CreateKnowsMutationVariables>;

/**
 * __useCreateKnowsMutation__
 *
 * To run a mutation, you first call `useCreateKnowsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKnowsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKnowsMutation, { data, loading, error }] = useCreateKnowsMutation({
 *   variables: {
 *      fromUid: // value for 'fromUid'
 *      toUid: // value for 'toUid'
 *   },
 * });
 */
export function useCreateKnowsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateKnowsMutation, CreateKnowsMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateKnowsMutation, CreateKnowsMutationVariables>(CreateKnowsDocument, baseOptions);
      }
export type CreateKnowsMutationHookResult = ReturnType<typeof useCreateKnowsMutation>;
export type CreateKnowsMutationResult = ApolloReactCommon.MutationResult<CreateKnowsMutation>;
export type CreateKnowsMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateKnowsMutation, CreateKnowsMutationVariables>;
export const LogContactDocument = gql`
    mutation logContact($input: LogContactInput!) {
  LogContact(input: $input) {
    id
  }
}
    `;
export type LogContactMutationFn = ApolloReactCommon.MutationFunction<LogContactMutation, LogContactMutationVariables>;

/**
 * __useLogContactMutation__
 *
 * To run a mutation, you first call `useLogContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logContactMutation, { data, loading, error }] = useLogContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLogContactMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogContactMutation, LogContactMutationVariables>) {
        return ApolloReactHooks.useMutation<LogContactMutation, LogContactMutationVariables>(LogContactDocument, baseOptions);
      }
export type LogContactMutationHookResult = ReturnType<typeof useLogContactMutation>;
export type LogContactMutationResult = ApolloReactCommon.MutationResult<LogContactMutation>;
export type LogContactMutationOptions = ApolloReactCommon.BaseMutationOptions<LogContactMutation, LogContactMutationVariables>;
export const TestDocument = gql`
    query Test($uid: ID!) {
  Me: Person(uid: $uid) {
    uid
  }
}
    `;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useTestQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TestQuery, TestQueryVariables>) {
        return ApolloReactHooks.useQuery<TestQuery, TestQueryVariables>(TestDocument, baseOptions);
      }
export function useTestLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TestQuery, TestQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TestQuery, TestQueryVariables>(TestDocument, baseOptions);
        }
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = ApolloReactCommon.QueryResult<TestQuery, TestQueryVariables>;
export const ContactsHookDocument = gql`
    query ContactsHook($uid: ID!) {
  Me: Person(uid: $uid) {
    uid
    contacts: knows {
      uid
    }
  }
}
    `;

/**
 * __useContactsHookQuery__
 *
 * To run a query within a React component, call `useContactsHookQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsHookQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsHookQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useContactsHookQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ContactsHookQuery, ContactsHookQueryVariables>) {
        return ApolloReactHooks.useQuery<ContactsHookQuery, ContactsHookQueryVariables>(ContactsHookDocument, baseOptions);
      }
export function useContactsHookLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ContactsHookQuery, ContactsHookQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ContactsHookQuery, ContactsHookQueryVariables>(ContactsHookDocument, baseOptions);
        }
export type ContactsHookQueryHookResult = ReturnType<typeof useContactsHookQuery>;
export type ContactsHookLazyQueryHookResult = ReturnType<typeof useContactsHookLazyQuery>;
export type ContactsHookQueryResult = ApolloReactCommon.QueryResult<ContactsHookQuery, ContactsHookQueryVariables>;