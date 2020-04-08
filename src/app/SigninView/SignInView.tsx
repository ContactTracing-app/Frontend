import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { FormState, Form } from 'gatsby-theme-firebase';
import { RouteComponentProps, useLocation } from '@reach/router';
import * as queryString from 'query-string';
import PageHeader from '../../components/PageHeader';
import { useStores } from '../../hooks/useStore';

import SignInForm from './SignInForm';
import { Tabs, TabList, Tab } from '@chakra-ui/core';

const LoginView: React.FC<RouteComponentProps> = () => {
  const { search } = useLocation();
  const { locationStore } = useStores();
  const intl = useIntl();

  const queryParams = queryString.parse(search) as any;

  if (queryParams.next) {
    locationStore.setNext(queryParams.next);
  } else {
    locationStore.setNext('/me');
  }

  return (
    <>
      <PageHeader
        heading={intl.formatMessage({ id: 'SigninView.heading' })}
        lead={intl.formatMessage({ id: 'SigninView.lead' })}
      />
      <FormState.Provider>
        <Tabs variant="soft-rounded" variantColor="teal">
          <TabList>
            <Tab>Sign In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
        </Tabs>

        <SignInForm></SignInForm>
        <Form></Form>
      </FormState.Provider>
    </>
  );
};

export default LoginView;
