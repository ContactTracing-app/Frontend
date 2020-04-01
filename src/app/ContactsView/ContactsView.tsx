import * as React from 'react';
import { Heading, Text, Link } from '@chakra-ui/core';
import {
  Link as IntlLink,
  useIntl,
  FormattedMessage
} from 'gatsby-plugin-intl';
import PageHeader from '../../components/PageHeader';
import ContactsList from '../../components/ContactsList';
import LogHistory from '../../components/LogHistory/LogHistory';

const ContactsView: React.FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageHeader
        heading={intl.formatMessage({ id: 'ContactsView.heading' })}
        lead={intl.formatMessage({ id: 'ContactsView.lead' })}
      />
      <Heading mb={4} as="h2" size="lg">
        <FormattedMessage id="ContactsView.Connections" />
      </Heading>
      <ContactsList />

      <Heading mt={10} mb={4} as="h2" size="lg">
        <FormattedMessage id="ContactsView.Log History" />
      </Heading>
      <Text my={8}>
        <FormattedMessage id="ContactsView.forgot" />{' '}
        <Link color="brand.orange" as={IntlLink} to="/me/log">
          <FormattedMessage id="ContactsView.forgot button" />
        </Link>
        .
      </Text>
      <LogHistory />
    </>
  );
};

export default ContactsView;
