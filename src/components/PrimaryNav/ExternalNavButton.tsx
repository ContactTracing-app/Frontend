import * as React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/core';

export type ExternalNavButtonProps = {
  to: string;
  label: string;
  Icon: React.ComponentType;
};

const ExternalNavButton: React.FC<ExternalNavButtonProps> = ({
  to,
  label,
  Icon
}) => (
  <Link isExternal href={to}>
    <Flex alignItems="center" justifyContent={['center', 'flex-start']} p={4}>
      <Box as={Icon} size="1.4em" mr={[0, 5]} />
      <Heading display={['none', 'inline-block']} as="span" size="sm">
        {label}
      </Heading>
    </Flex>
  </Link>
);

export default ExternalNavButton;
