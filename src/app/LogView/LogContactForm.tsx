import * as React from 'react';
import DatePicker from 'react-date-picker';
import { withFormik, InjectedFormikProps, Form, Field } from 'formik';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/core';
import Select, { Option } from 'react-select';
import useAnalytics from '../../hooks/useAnalytics';

const analytics = useAnalytics();

interface FormValues {
  entryDate: Date;
  contactWith: string[];
}

interface ContactWith {
  displayName: string;
  uid: string;
}

const InnerForm: React.FC<InjectedFormikProps<
  LogContactFormProps,
  FormValues
>> = props => {
  const {
    contactOptions,
    touched,
    errors,
    isSubmitting,
    setFieldValue
  } = props;

  const contacts: ContactWith[] = contactOptions.map(uid => ({
    uid,
    displayName: uid
  }));

  return (
    <Form>
      <Field name="entryDate">
        {({ field }) => {
          return (
            <FormControl isInvalid={errors[field.name] && touched[field.name]}>
              <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
              <DatePicker
                onChange={v => setFieldValue('entryDate', v)}
                value={field.value}
              />
              <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>

      <Field name="contactWith">
        {({ field }) => {
          return (
            <FormControl isInvalid={errors[field.name] && touched[field.name]}>
              <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
              <Select
                getOptionLabel={(o: ContactWith) => o.displayName}
                getOptionValue={(o: ContactWith) => o.uid}
                defaultValue={field.value}
                isMulti
                name={field.name}
                options={contacts}
                onChange={(option: Option) => {
                  console.log(option);
                  setFieldValue(field.name, option);
                }}
              />
              <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>

      <Button mt={4} variantColor="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </Form>
  );
};

interface LogContactFormProps {
  initialEntryDate?: Date;
  initialContactWith?: string[];
  contactOptions: string[];
}

// Wrap our form with the withFormik HoC
const LogContactForm = withFormik<LogContactFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      entryDate: props.initialEntryDate || new Date(),
      contactWith: props.initialContactWith || []
    };
  },

  handleSubmit: async (values, actions) => {
    // const resp = await functions.sendTestSMS();

    analytics.logEvent('contact_logged', {
      contact_with_quanitity: values.contactWith.length
    });
    actions.setSubmitting(false);
  }
})(InnerForm);

export default LogContactForm;
