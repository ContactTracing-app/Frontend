import * as React from 'react';
import useAuth from '../../hooks/useAuth';
import { useStores } from '../../hooks/useStore';

const UserProvider: React.FC = ({ children }) => {
  const { userStore } = useStores();
  const auth = useAuth();
  React.useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      userStore.setAuthUser(authUser);
      auth.currentUser?.getIdToken().then((token) => {
        localStorage.setItem('token', token);
        userStore.setToken(token);
      });
    });
    return () => listener();
  }, []);
  return <>{children}</>;
};

export default UserProvider;
