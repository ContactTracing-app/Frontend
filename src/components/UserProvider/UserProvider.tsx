import * as React from 'react';
import { navigate } from 'gatsby';
import useAuth from '../../hooks/useAuth';
import { useStores } from '../../hooks/useStore';

const UserProvider: React.FC = ({ children }) => {
  const { userStore, locationStore } = useStores();
  const auth = useAuth();
  React.useEffect(() => {
    auth.getRedirectResult().then(
      (result) => {
        if (locationStore.next) {
          const next = locationStore.next;
          navigate(next);
        }
      },
      (error) => {
        debugger;
      }
    );

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
