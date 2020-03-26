import * as React from 'react';
import LogContactForm from './LogContactForm';
import PageHeader from '../../components/PageHeader';

const LogView = () => {
  return (
    <>
      <PageHeader
        heading="Log Contact"
        lead="Send this link to your friends & family to connect."
      />
      <LogContactForm />
    </>
  );
};

export default LogView;
