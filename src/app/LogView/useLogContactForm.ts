import * as React from 'react';
import { useFormik } from 'formik';
import { useAuth } from 'gatsby-theme-firebase';
import { useLogContactMutation } from '../../__generated/graphql';
import toDateObject from '../../helpers/toDateObject';

export type ContactWith = {
  name: string;
  id: string;
};

export interface LogContactFormValues {
  entryDate: Date;
  contactWith: ContactWith[];
}

interface UseLogContactForm {
  initialValues: LogContactFormValues;
}

const useLogContactForm = ({ initialValues }: UseLogContactForm) => {
  const [logContactMutation] = useLogContactMutation();
  const { profile } = useAuth();

  const onSubmit = React.useCallback(
    (values: LogContactFormValues) => {
      logContactMutation({
        variables: {
          input: {
            fromUid: profile!.uid,
            toUid: 'julie',
            ...toDateObject(values.entryDate)
          }
        }
      });
    },
    [logContactMutation, profile]
  );

  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return formik;
};

export default useLogContactForm;
