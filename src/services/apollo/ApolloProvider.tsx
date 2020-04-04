import * as React from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import createClient from './client';

// const auth_token = process.env.AUTH_TOKEN || '';

const ApolloProvider: React.FC = ({ children }) => {
  const client = createClient();
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
