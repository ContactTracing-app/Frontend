import * as React from 'react';
import {
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box
} from '@chakra-ui/core';

interface LogEntry {
  date: Date;
}
const LogEntryAccordionItem: React.FC<LogEntry> = ({ date }) => {
  return (
    <AccordionItem>
      <AccordionHeader>
        <Box flex="1" textAlign="left">
          {date.toLocaleString()}
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  );
};

export default LogEntryAccordionItem;
