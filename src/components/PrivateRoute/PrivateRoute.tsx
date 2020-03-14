import * as React from 'react';
import { useAuth } from 'gatsby-theme-firebase';

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
