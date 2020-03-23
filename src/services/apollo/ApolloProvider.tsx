import * as React from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import createClient from './client';
import { useStores } from '../../hooks/useStore';

// const auth_token = process.env.AUTH_TOKEN || '';

const ApolloProvider: React.FC = ({ children }) => {
  const {
    userStore: { token }
  } = useStores();
  if (!token) {
    return <>{children}</>;
  }
  const client = createClient(token);
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
