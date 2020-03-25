import * as React from 'react';
import { Heading, Text } from '@chakra-ui/core';

type PageHeaderProps = {
  heading: React.ReactNode;
  lead: React.ReactNode;
};
const PageHeader: React.FC<PageHeaderProps> = ({ heading, lead }) => (
  <>
    <Heading mb={2}>{heading}</Heading>
    <Text fontSize="2xl" mb={8}>
      {lead}
    </Text>
  </>
);

export default PageHeader;
