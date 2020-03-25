import * as React from 'react';
import useAuth from '../../hooks/useAuth';
import { useStores } from '../../hooks/useStore';

const UserProvider: React.FC = ({ children }) => {
  const { userStore } = useStores();
  const auth = useAuth();
  React.useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      userStore.setAuthUser(authUser);
      console.log('new token');
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

// class UserProvider extends React.Component {
//   componentDidMount() {
//     if (!hasWindow) {
//       return;
//     }
//     const { userStore } = this.props;
//     const auth = useAuth();
//     this.listener = auth.onAuthStateChanged(
//       (authUser) => {
//         userStore.setAuthUser(authUser);
//         auth.currentUser?.getIdToken().then((token) => {
//           localStorage.setItem('token', token);
//           userStore.setToken(token);
//         });
//       },
//       () => {
//         userStore.setAuthUser(null);
//         userStore.setToken(null);
//       }
//     );
//   }

//   componentWillUnmount() {
//     this.listener();
//   }

//   render() {
//     return <React.Fragment>{this.props.children}</React.Fragment>;
//   }
// }

// export default UserProvider;
