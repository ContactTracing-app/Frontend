import * as React from 'react';
import * as Yup from 'yup';
import DatePicker from 'react-date-picker';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/core';

interface FormValues {
  entryDate: Date;
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    touched,
    errors,
    isSubmitting,
    message,
    values,
    setFieldValue
  } = props;
  return (
    <Form>
      <h1>{message}</h1>

      <pre>{JSON.stringify(values, null, 2)}</pre>

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

      <Button mt={4} variantColor="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </Form>
  );
};

interface LogContactFormProps {
  initialEntryDate?: Date;
}

// Wrap our form with the withFormik HoC
const LogContactForm = withFormik<LogContactFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      entryDate: props.initialEntryDate || new Date()
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    const errors: FormikErrors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
  }
})(InnerForm);

export default LogContactForm;
