import * as React from 'react';
import { Heading, Text, Link } from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import PageHeader from '../../components/PageHeader';
import ContactsList from '../../components/ContactsList';
import LogHistory from '../../components/LogHistory/LogHistory';

const ContactsView: React.FC = () => (
  <>
    <PageHeader
      heading="Contacts"
      lead="The list of people you’ve been in contact."
    />
    <Heading mb={4} as="h2" size="lg">
      Connections
    </Heading>
    <ContactsList />

    <Heading mt={10} mb={4} as="h2" size="lg">
      Log History
    </Heading>
    <Text my={8}>
      View or remove your contacts from your log. Forgot someone?{' '}
      <Link color="brand.orange" as={GatsbyLink} to="/me/log">
        Log Contact
      </Link>
      .
    </Text>
    <LogHistory />
  </>
);

export default ContactsView;
