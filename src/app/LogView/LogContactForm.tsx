import * as React from 'react';
import DatePicker from 'react-date-picker';
import { useAuth } from 'gatsby-theme-firebase';
import * as Yup from 'yup';
import { withFormik, InjectedFormikProps, Form, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Link,
  Spinner,
  useToast,
  Stack
} from '@chakra-ui/core';
import { MdToday } from 'react-icons/md';
import { Link as GatsbyLink } from 'gatsby';
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
  contactWith: ContactWith[] | null;
}

const InnerForm: React.FC<InjectedFormikProps<
  LogContactFormProps,
  FormValues
>> = (props) => {
  const {
    contactOptions,
    dirty,
    errors,
    isSubmitting,
    isValid,
    setFieldValue,
    touched
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
      <Stack spacing={6}>
        <Box>
          <Field name="entryDate">
            {({ field }) => (
              <FormControl
                isInvalid={errors[field.name] && touched[field.name]}
              >
                <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
                <Box>
                  <DatePicker
                    minDate={new Date('2019-11-01')}
                    calendarIcon={<MdToday />}
                    clearIcon={null}
                    onChange={(v) => setFieldValue('entryDate', v)}
                    value={field.value}
                  />
                </Box>
                <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Box>

        <Box>
          <Field name="contactWith">
            {({ field }) => (
              <FormControl
                isInvalid={errors[field.name] && touched[field.name]}
              >
                <FormLabel htmlFor={field.name}>Who did you meet?</FormLabel>
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
                <FormHelperText>
                  Can't find who you're looking for? Send them your{' '}
                  <Link to="/app/share/" as={GatsbyLink}>
                    Invite link
                  </Link>
                  .
                </FormHelperText>
                <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Box>
        <Box>
          <Button
            mt={4}
            isDisabled={!(isValid && dirty)}
            variantColor="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Stack>
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
    contactWith: props.initialContactWith || null
  }),

  // Add a custom validation function (this can be async too!)
  validationSchema: Yup.object({
    contactWith: Yup.array()
      .min(1, 'You must have met at least one person')
      .required('Required')
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
