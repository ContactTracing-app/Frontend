import * as React from 'react';
import { InjectedFormikProps, Form, Field, withFormik } from 'formik';
import { useAuth } from 'gatsby-theme-firebase';
import {
  FormControl,
  FormLabel,
  Button,
  Spinner,
  Stack,
  Box,
  useToastOptions,
  useToast,
  Select,
  Switch
} from '@chakra-ui/core';
import withPerson from '../../hooks/withPerson';

import PageHeader from '../../components/PageHeader';
import RiskLevelIndicator from '../../components/RiskLevelIndicator';
import {
  useUpdateHealthStatusMutation,
  UpdateHealthStatusMutationFn,
  useGetHealthStatusQuery
} from '../../__generated/graphql';
import useFunctions from '../../hooks/useFunctions';
const statusOptions = require('./healthStatusOptions.json');

interface FormValues {
  healthStatus: string;
  inQuarantine: boolean;
  notifyButtonEnabled: boolean;
}

const InnerForm: React.FC<InjectedFormikProps<ProfileFormProps, FormValues>> = (
  props
) => {
  const { setFieldValue, isValid, dirty } = props;

  return (
    <Form>
      <PageHeader
        heading="Your Risk Level"
        lead="Connect with more friends and log contacts daily to get more accurate data."
      />

      <RiskLevelIndicator uid="abc" />

      <Box>
        <PageHeader
          heading="Health Status"
          lead="Keep your contacts informed of your currrent status."
        />
      </Box>
      <Stack spacing={6}>
        <FormControl>
          <FormLabel>My Status :</FormLabel>
          <Field name="healthStatus">
            {(field) => (
              <Select
                placeholder="Select Option"
                defaultValue={props.values.healthStatus}
                onChange={(e) => {
                  //check if status has changed

                  setFieldValue('healthStatus', e.currentTarget.value);
                }}
              >
                {statusOptions &&
                  statusOptions.map((status: any) => {
                    return (
                      <option key={status.label} value={status.value}>
                        {status.label}
                      </option>
                    );
                  })}
              </Select>
            )}
          </Field>
        </FormControl>
        {/* Switch for users's quarantine status */}
        <FormControl>
          <Field name="inQuarantine">
            {(field) => (
              <Switch
                color="orange"
                defaultIsChecked={props.values.inQuarantine}
                size="lg"
                onChange={(e) => {
                  setFieldValue('inQuarantine', !props.values.inQuarantine);
                }}
              ></Switch>
            )}
          </Field>

          <FormLabel mx={2}>In Quarantine</FormLabel>
        </FormControl>
        <Box>
          <Button
            isDisabled={
              (dirty && !isValid) || props.values === props.initialValues
            }
            mt={4}
            variantColor="teal"
            type="submit"
          >
            Notify
          </Button>
        </Box>
      </Stack>
    </Form>
  );
};

interface ProfileFormProps {
  initialHealthStatus?: string;
  initialInQuarantine?: boolean;
}

interface ProfileFormInnerProps extends ProfileFormProps {
  toast: (toast: useToastOptions) => void;
  uid: string;
  updateHealthStatusMutation: UpdateHealthStatusMutationFn;
}

const WithFormik = withFormik<ProfileFormInnerProps, FormValues>({
  mapPropsToValues: (props) => ({
    healthStatus: props.initialHealthStatus || statusOptions[0],
    inQuarantine: props.initialInQuarantine || false
  }),

  handleSubmit: async (values, actions) => {
    actions.props.updateHealthStatusMutation({
      variables: {
        uid: actions.props.uid,
        status: values.healthStatus,
        isInQuarantine: values.inQuarantine
      }
    });
  }
})(InnerForm);

// Wrap our form with the withFormik HoC
const ProfileForm: React.FC<ProfileFormProps> = (props) => {
  const { sendNotifications } = useFunctions();
  const { profile } = useAuth();
  const toast = useToast();
  const [me, loadingMe] = withPerson({
    uid: profile?.uid
  });

  const { data, loading: loadingHealthStatus } = useGetHealthStatusQuery({
    variables: {
      uid: me.uid
    }
  });

  const [updateHealthStatusMutation] = useUpdateHealthStatusMutation({
    onError(data) {
      toast({
        position: 'bottom-right',
        title: 'Whoops!',
        description: data.message,
        status: 'error',
        isClosable: true
      });
    },
    onCompleted(payload) {
      let description = `Your status have been recorded.`;

      // check if contact person needs to be notified
      if (
        payload.UpdatePerson?.status === statusOptions[2].value ||
        payload.UpdatePerson?.status === statusOptions[1].value
      ) {
        // sendTestSMS();
        sendNotifications({ uid: profile?.uid });
        description = `${description} Your contact will be notified.`;
      }
      toast({
        position: 'bottom-right',
        title: 'Status Update Received',
        description,
        status: 'success',
        isClosable: true
      });
      // Analytics…
    }
  });

  if (loadingMe || loadingHealthStatus) {
    return <Spinner />;
  }

  return (
    <>
      <WithFormik
        toast={toast}
        uid={profile?.uid}
        initialHealthStatus={data?.healthData.status}
        initialInQuarantine={data?.healthData.isInQuarantine}
        updateHealthStatusMutation={updateHealthStatusMutation}
        {...props}
      />
    </>
  );
};

// HEY! From Michele
//

export default ProfileForm;
