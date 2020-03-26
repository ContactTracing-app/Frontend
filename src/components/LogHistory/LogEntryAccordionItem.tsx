import * as React from 'react';
import * as moment from 'moment';
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
          {moment(date).format('ddd, DD MMM YYYY')}
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
