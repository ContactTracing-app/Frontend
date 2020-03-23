import * as React from 'react';
import { Heading, Box, Avatar, Flex, Text } from '@chakra-ui/core';

interface ConnectionProps {
  name: string;
}
const Connection: React.FC<ConnectionProps> = ({ name }) => (
  <Flex alignItems="center">
    <Avatar name={name} />
    <Box
      ml="2"
      mt="1"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      isTruncated
    >
      {name}
    </Box>
  </Flex>
);

const ContactsView: React.FC = () => {
  return (
    <>
      <Heading>Contact</Heading>
      <Text>Real list coming soon…</Text>
      <Connection name="Michele Memoli" />
      <Connection name="Ponk Memoli" />
      <Connection name="Paul Matthews" />
      <Connection name="Eva hello" />
      <Connection name="ผิดมั้ย ถ้าอ่า" />
    </>
  );
};

export default ContactsView;
