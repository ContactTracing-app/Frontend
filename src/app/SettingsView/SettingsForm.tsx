import * as React from 'react';
import { InjectedFormikProps, Form, Field, withFormik } from 'formik';
import { firebase, useAuth } from 'gatsby-theme-firebase';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  FormHelperText
} from '@chakra-ui/core';
import withPerson from '../../hooks/withPerson';

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
      <Field name="displayName">
        {({ field }) => {
          return (
            <FormControl isInvalid={errors[field.name] && touched[field.name]}>
              <FormLabel htmlFor={field.name}>Display Name</FormLabel>
              <Input {...field} />
              <FormHelperText id="email-helper-text">
                This is public so other can find you.
              </FormHelperText>
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

interface SettingsFormProps {
  initialDisplayName?: string;
}

interface SettingsFormInnerProps extends SettingsFormProps {
  saveDisplayName: () => void;
  uid: string;
}

const WithFormik = withFormik<SettingsFormInnerProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      displayName: props.initialDisplayName || ''
    };
  },

  handleSubmit: async (values, actions) => {
    // const resp = await functions.sendTestSMS();

    await firebase
      .database()
      .ref(`profiles/${actions.props.uid}/displayName`)
      .set(values.displayName);

    window.alert('done');

    // analytics.logEvent('display_name', {
    //   contact_with_quanitity: values.contactWith.length
    // });
    actions.setSubmitting(false);
  }
})(InnerForm);

// Wrap our form with the withFormik HoC
const SettingsForm: React.FC<SettingsFormProps> = (props) => {
  const { profile } = useAuth();
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
        uid={profile?.uid}
        initialDisplayName={me.displayName}
        {...props}
      />
    </>
  );
};

export default SettingsForm;
