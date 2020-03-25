import * as React from 'react';
import LogContactForm from './LogContactForm';
import PageHeader from '../../components/PageHeader';

const LogView = () => {
  return (
    <>
      <PageHeader heading="Log your contact" lead="line of text here" />
      <LogContactForm />
    </>
  );
};

export default LogView;
