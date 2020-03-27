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
  Alert,
  AlertIcon,
  useToast
} from '@chakra-ui/core';
import Select, { Option } from 'react-select';
import useAnalytics from '../../hooks/useAnalytics';
import withPerson from '../../hooks/withPerson';
import {
  useLogContactMutation,
  LogContactMutationFn,
  LogHistoryDocument
} from '../../__generated/graphql';
import toDateObject from '../../helpers/toDateObject';
import useContacts from '../../hooks/useContacts';

const { contactLogged } = useAnalytics();

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
    setFieldValue
  } = props;

  const contactWithOptions: ContactWith[] = contactOptions.map((uid) => {
    const [person] = withPerson({ uid });
    return {
      uid,
      displayName: person.displayName
    };
  });

  return (
    <Form>
      <Field name="entryDate">
        {({ field }) => (
          <FormControl isInvalid={errors[field.name] && touched[field.name]}>
            <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
            <DatePicker
              clearIcon={null}
              onChange={(v) => setFieldValue('entryDate', v)}
              value={field.value}
            />
            <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Field name="contactWith">
        {({ field }) => (
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
        )}
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
  mapPropsToValues: (props) => ({
    entryDate: props.initialEntryDate || new Date(),
    contactWith: props.initialContactWith || []
  }),

  handleSubmit: async (values, actions) =>
    Promise.all(
      values.contactWith.map((contact) =>
        actions.props.logContactMutation({
          variables: {
            input: {
              fromUid: actions.props.uid,
              toUid: contact.uid,
              ...toDateObject(values.entryDate)
            }
          },
          refetchQueries: [
            {
              query: LogHistoryDocument,
              variables: { uid: actions.props.uid }
            }
          ]
        })
      )
    ).then(() => actions.setSubmitting(false))
})(InnerForm);

// Wrap our form with the withFormik HoC
const LogContactForm: React.FC<LogContactFormProps> = (props) => {
  const toast = useToast();
  const [logContactMutation] = useLogContactMutation({
    onCompleted() {
      toast({
        position: 'bottom-right',
        title: 'Contact Logged',
        description: 'Keep up the good work 💅',
        status: 'success',
        isClosable: true
      });
      contactLogged();
    }
  });
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
