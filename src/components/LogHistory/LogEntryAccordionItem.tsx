import * as React from 'react';
import {
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box
} from '@chakra-ui/core';
import ContactAvatar from '../ContactAvatar/ContactAvatar';

interface LogEntry {
  date: Date;
  contactWithUids: string[];
}
const LogEntryAccordionItem: React.FC<LogEntry> = ({
  date,
  contactWithUids
}) => {
  return (
    <AccordionItem>
      <AccordionHeader>
        <Box flex="1" textAlign="left">
          {date.toLocaleString()}
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel pb={4}>
        {contactWithUids.map((uid) => (
          <ContactAvatar key={uid} uid={uid} avatar={{ size: 'sm' }} />
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default LogEntryAccordionItem;
