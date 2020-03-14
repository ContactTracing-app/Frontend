import * as React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/core';

// Shape of form values
interface FormValues {
  name: string;
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>

      <Field name="name">
        {({ field }) => (
          <FormControl isInvalid={errors.name && touched.name}>
            <FormLabel htmlFor="name">First name</FormLabel>
            <Input {...field} id="name" placeholder="name" />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Button mt={4} variantColor="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const LogContactForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: ''
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors = {};
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
