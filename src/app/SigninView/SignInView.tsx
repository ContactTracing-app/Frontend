import React, { useState } from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { FormState, Form } from 'gatsby-theme-firebase';
import { RouteComponentProps, useLocation } from '@reach/router';
import * as queryString from 'query-string';
import PageHeader from '../../components/PageHeader';
import { useStores } from '../../hooks/useStore';

import SignInForm from './SignInForm';
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/core';
import SignUpForm from './SignUpForm';
SignUpForm;

const LoginView: React.FC<RouteComponentProps> = (props) => {
  const { search } = useLocation();
  const { locationStore } = useStores();
  const intl = useIntl();

  const queryParams = queryString.parse(search) as any;

  if (queryParams.next) {
    locationStore.setNext(queryParams.next);
  } else {
    locationStore.setNext('/me');
  }

  console.log(props);

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

          <TabPanels>
            <TabPanel>
              <SignInForm></SignInForm>
            </TabPanel>
            <TabPanel>
              <SignUpForm></SignUpForm>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Form
          onLoginSuccess={(user) => {
            navigate('/me');
          }}
        ></Form>
      </FormState.Provider>
    </>
  );
};

export default LoginView;
