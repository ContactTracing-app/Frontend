import * as React from 'react';
import { SingleDatePicker } from 'react-dates';
import { Heading, Text, Divider } from '@chakra-ui/core';
import LogContactForm from '../../forms/logContact';

const ContactView = () => {
  const [contactDate, setContactDate] = React.useState<any>(null);
  const [dateIsFocused, setDateIsFocused] = React.useState<boolean>(false);
  return (
    <div>
      <Heading>Contact</Heading>
      <Text fontSize="4xl">Who'd you meet today?</Text>

      <Divider />
      <SingleDatePicker
        date={contactDate} // momentPropTypes.momentObj or null
        onDateChange={date => setContactDate(date)} // PropTypes.func.isRequired
        focused={dateIsFocused} // PropTypes.bool
        onFocusChange={({ focused }) => setDateIsFocused(focused || false)}
        id="contact_date" // PropTypes.string.isRequired,
      />
      <Divider />
      <LogContactForm />
    </div>
  );
};

export default ContactView;
