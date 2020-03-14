import * as React from 'react';
import { SingleDatePicker } from 'react-dates';
import LogContactForm from '../../forms/logContact';

const ContactView = () => {
  const [contactDate, setContactDate] = React.useState<any>(null);
  const [dateIsFocused, setDateIsFocused] = React.useState<boolean>(false);
  return (
    <div>
      <h1>Contact</h1>
      <p>Log who you've met today</p>
      <hr />
      <SingleDatePicker
        date={contactDate} // momentPropTypes.momentObj or null
        onDateChange={date => setContactDate(date)} // PropTypes.func.isRequired
        focused={dateIsFocused} // PropTypes.bool
        onFocusChange={({ focused }) => setDateIsFocused(focused)} // PropTypes.func.isRequired
        id="contact_date" // PropTypes.string.isRequired,
      />
      <hr />
      <LogContactForm />
    </div>
  );
};

export default ContactView;
