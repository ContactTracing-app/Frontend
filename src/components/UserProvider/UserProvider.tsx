import * as React from 'react';
import hasWindow from '../../helpers/hasWindow';
import { UserStoreProps as UserStore } from '../../stores/UserStore';
import useAuth from '../../hooks/useAuth';

interface UserProviderProps {
  userStore: UserStore;
}

class UserProvider extends React.Component<UserProviderProps> {
  componentDidMount() {
    if (!hasWindow) {
      return;
    }
    const { userStore } = this.props;
    const auth = useAuth();
    this.listener = auth.onAuthStateChanged(
      authUser => {
        userStore.setAuthUser(authUser);
        auth.currentUser?.getIdToken().then(token => userStore.setToken(token));
      },
      () => {
        userStore.setAuthUser(null);
        userStore.setToken(null);
      }
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default UserProvider;
