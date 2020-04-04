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
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import withPerson from '../../hooks/withPerson';
import PageHeader from '../../components/PageHeader';
import RiskLevelIndicator from '../../components/RiskLevelIndicator';
import {
  useUpdateHealthStatusMutation,
  UpdateHealthStatusMutationFn,
  useGetHealthStatusQuery
} from '../../__generated/graphql';
import useFunctions from '../../hooks/useFunctions';
import useAnalytics, { Severity } from '../../hooks/useAnalytics';

interface FormValues {
  healthStatus: string;
  inQuarantine: boolean;
  notifyButtonEnabled: boolean;
}

const statusOptions = [
  {
    value: 'TOTALLY_FINE'
  },
  {
    value: 'SHOWING_SYMPTOMS'
  },
  {
    value: 'TEST_POSITIVE'
  }
];

const InnerForm: React.FC<InjectedFormikProps<
  ProfileFormProps,
  FormValues
>> = (props) => {
  const intl = useIntl();
  const { setFieldValue, isValid, dirty } = props;

  return (
    <Form>
      <PageHeader
        heading={intl.formatMessage({ id: 'ProfileView.heading' })}
        lead={intl.formatMessage({ id: 'ProfileView.lead' })}
      />

      <RiskLevelIndicator uid="abc" />

      <Box>
        <PageHeader
          heading={intl.formatMessage({
            id: 'ProfileView.healthStatus.heading'
          })}
          lead={intl.formatMessage({
            id: 'ProfileView.healthStatus.lead'
          })}
        />
      </Box>
      <Stack spacing={6}>
        <Field name="healthStatus">
          {(field) => (
            <FormControl>
              <FormLabel>
                {intl.formatMessage({
                  id: 'ProfileView.healthStatus.label'
                })}
              </FormLabel>
              <Select
                defaultValue={props.values.healthStatus}
                onChange={(e) => {
                  //check if status has changed

                  setFieldValue(
                    'healthStatus',
                    e.currentTarget.value
                  );
                }}
              >
                <option value="TOTALLY_FINE">
                  {intl.formatMessage({ id: 'ProfileView.fine' })}
                </option>
                <option value="SHOWING_SYMPTOMS">
                  {intl.formatMessage({ id: 'ProfileView.symptoms' })}
                </option>
                <option value="TESTED_POSITIVE">
                  {intl.formatMessage({ id: 'ProfileView.positive' })}
                </option>
              </Select>
            </FormControl>
          )}
        </Field>

        {/* Switch for users's quarantine status */}
        <Field name="inQuarantine">
          {(field) => (
            <FormControl>
              <Switch
                color="orange"
                defaultIsChecked={props.values.inQuarantine}
                size="lg"
                onChange={(e) => {
                  setFieldValue(
                    'inQuarantine',
                    !props.values.inQuarantine
                  );
                }}
              />
              <FormLabel mx={2}>
                <FormattedMessage id="ProfileView.inQuarantine" />
              </FormLabel>
            </FormControl>
          )}
        </Field>

        <Box>
          <Button
            isDisabled={
              (dirty && !isValid) ||
              props.values === props.initialValues
            }
            mt={4}
            variantColor="teal"
            type="submit"
          >
            <FormattedMessage id="ProfileView.notify" />
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
  const intl = useIntl();
  const { sendNotifications } = useFunctions();
  const { notificationSent } = useAnalytics();
  const { profile } = useAuth();
  const toast = useToast();
  const [me, loadingMe] = withPerson({
    uid: profile ? profile.uid : ''
  });

  const {
    data,
    loading: loadingHealthStatus
  } = useGetHealthStatusQuery({
    variables: {
      uid: me.uid
    }
  });

  const [updateHealthStatusMutation] = useUpdateHealthStatusMutation({
    onError(data) {
      toast({
        position: 'bottom-right',
        title: intl.formatMessage({ id: 'ProfileView.whoops' }),
        description: data.message,
        status: 'error',
        isClosable: true
      });
    },
    onCompleted(payload) {
      let description = intl.formatMessage({
        id: 'ProfileView.recorded'
      });

      // check if contact person needs to be notified
      if (
        payload.UpdatePerson?.status === statusOptions[2].value ||
        payload.UpdatePerson?.status === statusOptions[1].value
      ) {
        // sendTestSMS();
        sendNotifications({ uid: profile?.uid });
        description = `${description} ${intl.formatMessage({
          id: 'ProfileView.recorded2'
        })}`;
        notificationSent(
          payload.UpdatePerson?.status === statusOptions[1].value
            ? Severity.SHOWING_SYMPTOMS
            : Severity.TEST_POSITIVE
        );
      }
      toast({
        position: 'bottom-right',
        title: intl.formatMessage({ id: 'ProfileView.success' }),
        description,
        status: 'success',
        isClosable: true
      });
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

export default ProfileForm;
