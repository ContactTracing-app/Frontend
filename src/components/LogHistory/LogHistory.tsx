import * as React from 'react';
import { Accordion } from '@chakra-ui/core';
import LogEntryAccordionItem from './LogEntryAccordionItem';

const LogHistory: React.FC = () => {
  return (
    <Accordion>
      <LogEntryAccordionItem date={new Date()} />
      <LogEntryAccordionItem date={new Date()} />
      <LogEntryAccordionItem date={new Date()} />
    </Accordion>
  );
};

export default LogHistory;
