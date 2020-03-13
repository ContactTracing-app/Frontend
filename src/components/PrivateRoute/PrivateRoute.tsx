import * as React from 'react';
import { navigate } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  if (!user) {
    navigate('/app/login');
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
