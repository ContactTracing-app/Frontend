import * as React from 'react';
import { InjectedFormikProps, Form, Field, withFormik } from 'formik';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  FormHelperText,
  Stack,
  Box,
  useToastOptions,
  useToast
} from '@chakra-ui/core';
import withPerson from '../../hooks/withPerson';
import useAnalytics from '../../hooks/useAnalytics';

interface FormValues {
  displayName: Date;
  should_show_profileURL: boolean;
}

const InnerForm: React.FC<InjectedFormikProps<
  SettingsFormProps,
  FormValues
>> = (props) => {
  const { touched, errors, isSubmitting } = props;

  return (
    <Form>
      <Stack spacing={6}>
        <Box>
          <Field name="displayName">
            {({ field }) => (
              <FormControl
                isInvalid={errors[field.name] && touched[field.name]}
              >
                <FormLabel htmlFor={field.name}>Display Name</FormLabel>
                <Input {...field} />
                <FormHelperText id="email-helper-text">
                  This is public so other can find you.
                </FormHelperText>
              </FormControl>
            )}
          </Field>
        </Box>
        <Box>
          <Button
            mt={4}
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

interface SettingsFormProps {
  initialDisplayName?: string;
}

export interface Account {
  email?: string;
  sms_number?: string;
  preferences: {
    contact_via_email: boolean;
    contact_via_sms: boolean;
  };
}

interface SettingsFormInnerProps extends SettingsFormProps {
  saveDisplayName: () => void;
  toast: (toast: useToastOptions) => void;
  uid: string;
}

const WithFormik = withFormik<SettingsFormInnerProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => ({
    displayName: props.initialDisplayName || ''
  }),

  handleSubmit: async (values, actions) => {
    const { displaynameChanged } = useAnalytics();

    try {
      await firebase
        .database()
        .ref(`profiles/${actions.props.uid}/displayName`)
        .set(values.displayName);

      /*
      1. If SMS is enabled:
        - Update Firestore account: preferences.contact_via_sms = true
        - Update Firestore phone: sms_number = true

      await firebase
        .firestore()
        .collection(`accounts`)
        .doc(actions.props.uid)
        .update({});
        
      */

      actions.props.toast({
        position: 'bottom-right',
        title: 'Display name changed',
        description: 'Your new display name is now public.',
        status: 'success',
        isClosable: true
      });

      displaynameChanged();
      actions.setSubmitting(false);
    } catch (e) {
      actions.props.toast({
        position: 'bottom-right',
        title: "That's annoying",
        description: 'Something went wrong. Maybe try again?',
        status: 'error',
        isClosable: true
      });
      actions.setSubmitting(false);
    }
  }
})(InnerForm);

// Wrap our form with the withFormik HoC
const SettingsForm: React.FC<SettingsFormProps> = (props) => {
  const { profile } = useAuth();
  const toast = useToast();
  const [me, loadingMe] = withPerson({
    uid: profile?.uid
  });

  if (loadingMe) {
    return <Spinner />;
  }

  return (
    <>
      {/* {JSON.stringify(me.displayName, null, 2)} */}
      <WithFormik
        toast={toast}
        uid={profile?.uid}
        initialDisplayName={me.displayName}
        {...props}
      />
    </>
  );
};

export default SettingsForm;
