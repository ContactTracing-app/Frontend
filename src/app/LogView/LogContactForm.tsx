import * as React from 'react';
import DatePicker from 'react-date-picker';
import { useAuth } from 'gatsby-theme-firebase';
import { withFormik, InjectedFormikProps, Form, Field } from 'formik';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Spinner,
} from '@chakra-ui/core';
import Select, { Option } from 'react-select';
import useAnalytics from '../../hooks/useAnalytics';
import withPerson from '../../hooks/withPerson';
import {
  useLogContactMutation,
  LogContactMutationFn,
} from '../../__generated/graphql';
import toDateObject from '../../helpers/toDateObject';
import useContacts from '../../hooks/useContacts';

const analytics = useAnalytics();

interface ContactWith {
  displayName: string;
  uid: string;
}

interface FormValues {
  entryDate: Date;
  contactWith: ContactWith[];
}

const InnerForm: React.FC<InjectedFormikProps<
  LogContactFormProps,
  FormValues
>> = (props) => {
  const {
    contactOptions,
    touched,
    errors,
    isSubmitting,
    setFieldValue,
  } = props;

  const contactWithOptions: ContactWith[] = contactOptions.map((uid) => {
    const [person] = withPerson({ uid });
    return {
      uid,
      displayName: person.displayName,
    };
  });

  return (
    <Form>
      <Field name="entryDate">
        {({ field }) => {
          return (
            <FormControl isInvalid={errors[field.name] && touched[field.name]}>
              <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
              <DatePicker
                clearIcon={null}
                onChange={(v) => setFieldValue('entryDate', v)}
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
                options={contactWithOptions}
                onChange={(option: Option) => {
                  setFieldValue(field.name, option);
                }}
              />
              <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>

      <Button mt={4} variantColor="teal" isLoading={isSubmitting} type="submit">
        Save
      </Button>
    </Form>
  );
};

interface LogContactFormProps {
  initialEntryDate?: Date;
  initialContactWith?: ContactWith[];
  contactOptions: ContactWith[];
}

interface LogContactFormInnerProps extends LogContactFormProps {
  uid: string;
  logContactMutation: LogContactMutationFn;
}

const WithFormik = withFormik<LogContactFormInnerProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      entryDate: props.initialEntryDate || new Date(),
      contactWith: props.initialContactWith || [],
    };
  },

  handleSubmit: async (values, actions) => {
    // const resp = await functions.sendTestSMS();
    values.contactWith.forEach((contact) => {
      actions.props.logContactMutation({
        variables: {
          input: {
            fromUid: actions.props.uid,
            toUid: contact.uid,
            ...toDateObject(values.entryDate),
          },
        },
      });
    });

    setTimeout(() => {
      analytics.logEvent('contact_logged', {
        contact_with_quanitity: values.contactWith.length,
      });
      actions.setSubmitting(false);
    }, 1000);
  },
})(InnerForm);

// Wrap our form with the withFormik HoC
const LogContactForm: React.FC<LogContactFormProps> = (props) => {
  const [logContactMutation] = useLogContactMutation();
  const { profile, isLoading: loadingProfile } = useAuth();
  const [contacts, loadingContacts] = useContacts();

  if (loadingContacts || loadingProfile) {
    return <Spinner />;
  }

  return (
    <WithFormik
      uid={profile!.uid}
      contactOptions={contacts}
      logContactMutation={logContactMutation}
      {...props}
    />
  );
};

export default LogContactForm;
