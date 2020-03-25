import ApolloProvider from '../services/apollo/ApolloProvider';
import UserProvider from '../components/UserProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <UserProvider>
      <ApolloProvider>{element}</ApolloProvider>
    </UserProvider>
  );
};
