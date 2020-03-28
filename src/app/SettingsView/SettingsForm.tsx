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
  useToast,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/core';
import withPerson from '../../hooks/withPerson';
import useAnalytics from '../../hooks/useAnalytics';

interface FormValues {
  displayName: Date;
  should_show_profileURL: boolean;
  preferences: any;
  smsChecked: boolean;
  smsNumber: String;
}

const InnerForm: React.FC<InjectedFormikProps<
  SettingsFormProps,
  FormValues
>> = (props) => {
  const { touched, errors, isSubmitting, setFieldValue } = props;

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
          <Field name="preferences">
            {(field) => (
              <FormControl>
                <FormLabel>Notification Preferences</FormLabel>
                <CheckboxGroup
                  name="preferences"
                  onChange={(e) => {
                    // check if sms deselected and sms is available, clear sms number
                    if (
                      props.values.preferences.contact_via_sms &&
                      props.values.smsNumber
                    ) {
                      setFieldValue('smsNumber', '');
                    }
                    setFieldValue(
                      'preferences.contact_via_sms',
                      !props.values.preferences?.contact_via_sms
                    );
                  }}
                >
                  <Checkbox isDisabled defaultIsChecked>
                    Email
                  </Checkbox>

                  <Checkbox
                    defaultIsChecked={props.values.preferences?.contact_via_sms}
                  >
                    SMS
                    {props.values.preferences?.contact_via_sms ? (
                      <Field name="smsNumber">
                        {({ field }) => (
                          <FormControl>
                            <InputGroup>
                              <InputLeftAddon children="+" />
                              <Input
                                type="tel"
                                roundedLeft="0"
                                defaultValue={props.initialSmsNumber}
                                placeholder="44XXXXXX"
                                {...field}
                              />
                            </InputGroup>
                          </FormControl>
                        )}
                      </Field>
                    ) : (
                      ''
                    )}
                  </Checkbox>
                </CheckboxGroup>
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
  initialPreferences?: {};
  initialSmsNumber?: string;
}

interface SettingsFormInnerProps extends SettingsFormProps {
  saveDisplayName: () => void;
  toast: (toast: useToastOptions) => void;
  uid: string;
}

const WithFormik = withFormik<SettingsFormInnerProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => ({
    displayName: props.initialDisplayName || '',
    preferences: props.initialPreferences || {},
    smsNumber: props.initialSmsNumber || ''
  }),

  handleSubmit: async (values, actions) => {
    const { displaynameChanged } = useAnalytics();

    //Check if notification preference is set to SMS and contact number is not null
    if (values.preferences.contact_via_sms && !values.smsNumber) {
      actions.props.toast({
        position: 'bottom-right',
        title: 'SMS Number is missing',
        description:
          'You have chosen SMS as preferred notification. However, no sms number was provided',
        status: 'error',
        isClosable: true
      });
      actions.setSubmitting(false);
      return;
    }

    try {
      await firebase
        .database()
        .ref(`profiles/${actions.props.uid}/`)
        .update(values)
        .then(() => {
          actions.props.toast({
            position: 'bottom-right',
            title: 'Profile has been updated',
            description: 'Your profile has been ',
            status: 'success',
            isClosable: true
          });
        })
        .catch((err) => {
          // Console log if there is a firebase error
          console.log(err);
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

  console.log(me);

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
        initialPreferences={me.preferences}
        initialSmsNumber={me.smsNumber}
        {...props}
      />
    </>
  );
};

export default SettingsForm;
