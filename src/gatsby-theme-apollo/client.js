import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const uri = process.env.GATSBY_GRAPHQL_ENDPOINT;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri,
    fetch
  })
});

export default client;
