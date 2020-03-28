import ApolloProvider from '../services/apollo/ApolloProvider';
import UserProvider from '../components/UserProvider';

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <ApolloProvider>{element}</ApolloProvider>
  </UserProvider>
);
