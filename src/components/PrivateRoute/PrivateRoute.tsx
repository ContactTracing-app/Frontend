import * as React from 'react';
import { navigate } from 'gatsby';

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    navigate('/app/login');
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
