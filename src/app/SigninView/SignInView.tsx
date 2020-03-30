import * as React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';
import { RouteComponentProps, useLocation } from '@reach/router';
import * as queryString from 'query-string';
import PageHeader from '../../components/PageHeader';
import { useStores } from '../../hooks/useStore';

const LoginView: React.FC<RouteComponentProps> = () => {
  const { search } = useLocation();
  const { locationStore } = useStores();

  const queryParams = queryString.parse(search);

  if (queryParams.next) {
    locationStore.setNext(queryParams.next);
  } else {
    locationStore.setNext('/me');
  }

  return (
    <>
      <PageHeader
        heading="Sign in"
        lead="Let's get you signed-in to your free account."
      />
      <FormState.Provider>
        <Form />
      </FormState.Provider>
    </>
  );
};

export default LoginView;
