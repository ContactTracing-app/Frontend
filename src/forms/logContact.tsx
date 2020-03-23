import * as React from 'react';
import DatePicker from 'react-date-picker';
import { Formik, Field, useFormik } from 'formik';
import Select, { Option } from 'react-select';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/core';
import { useLogContactMutation } from '../generated/graphql';
import toDateObject from '../helpers/toDateObject';
import useAuth from '../helpers/useAuth';

export type ContactWith = {
  name: string;
  id: string;
};

interface FormValues {
  entryDate: Date;
  contactWith: ContactWith[];
}

const LogContactForm: React.FC = () => {
  const [logContactMutation] = useLogContactMutation();
  const auth = useAuth();

  const formik = useFormik<FormValues>({
    initialValues: {
      entryDate: new Date(),
      contactWith: []
    },
    onSubmit: (values, actions) => {
      console.log({ values, actions });
      alert(JSON.stringify(values, null, 2));
      logContactMutation({
        variables: {
          input: {
            fromUid: auth.currentUser.uid,
            toUid: 'julie',
            ...toDateObject(values.entryDate)
          }
        }
      });
      actions.setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* <Field name="entryDate">
        {({ field }) => {
          return (
            <FormControl isInvalid={errors[field.name] && touched[field.name]}>
              <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
              <DatePicker
                onChange={v => setFieldValue('entryDate', v)}
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
                getOptionLabel={(o: ContactWith) => o.name}
                getOptionValue={(o: ContactWith) => o.id}
                defaultValue={field.value}
                isMulti
                name={field.name}
                options={contactOptions}
                onChange={(option: Option) => {
                  console.log(option);
                  setFieldValue(field.name, option);
                }}
              />
              <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field> */}

      <Button
        mt={4}
        variantColor="teal"
        isLoading={formik.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default LogContactForm;

// import * as React from 'react';
// import DatePicker from 'react-date-picker';
// import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   FormErrorMessage
// } from '@chakra-ui/core';
// import Select, { Option } from 'react-select';
// import useAnalytics from '../helpers/useAnalytics';
// import useAuth from '../helpers/useAuth';
// import { useLogContactMutation } from '../generated/graphql';

// const analytics = useAnalytics();
// const auth = useAuth();

// const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
//   const {
//     contactOptions,
//     touched,
//     errors,
//     isSubmitting,
//     setFieldValue
//   } = props;

//   return (
//     <Form>
//       <Field name="entryDate">
//         {({ field }) => {
//           return (
//             <FormControl isInvalid={errors[field.name] && touched[field.name]}>
//               <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
//               <DatePicker
//                 onChange={v => setFieldValue('entryDate', v)}
//                 value={field.value}
//               />
//               <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
//             </FormControl>
//           );
//         }}
//       </Field>

//       <Field name="contactWith">
//         {({ field }) => {
//           return (
//             <FormControl isInvalid={errors[field.name] && touched[field.name]}>
//               <FormLabel htmlFor={field.name}>Entry Date</FormLabel>
//               <Select
//                 getOptionLabel={(o: ContactWith) => o.name}
//                 getOptionValue={(o: ContactWith) => o.id}
//                 defaultValue={field.value}
//                 isMulti
//                 name={field.name}
//                 options={contactOptions}
//                 onChange={(option: Option) => {
//                   console.log(option);
//                   setFieldValue(field.name, option);
//                 }}
//               />
//               <FormErrorMessage>{errors.entryDate}</FormErrorMessage>
//             </FormControl>
//           );
//         }}
//       </Field>

//       <Button mt={4} variantColor="teal" isLoading={isSubmitting} type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// interface LogContactFormProps {
//   initialEntryDate?: Date;
//   initialContactWith?: ContactWith[];
//   contactOptions: ContactWith[];
// }

// // Wrap our form with the withFormik HoC
// const LogContactForm = withFormik<LogContactFormProps, FormValues>({
//   // Transform outer props into form values
//   mapPropsToValues: props => {
//     return {
//       entryDate: props.initialEntryDate || new Date(),
//       contactWith: props.initialContactWith || []
//     };
//   },

//   handleSubmit: async (values, actions) => {
//     // const resp = await functions.sendTestSMS();

//     const [logContactMutation] = useLogContactMutation({
//       variables: {
//         input: {
//           fromUid: auth.currentUser!.uid,
//           toUid: 'julie',
//           yyyy: '2020',
//           mm: '02',
//           dd: '03'
//         }
//       }
//     });
//     logContactMutation();
//     analytics.logEvent('contact_logged', {
//       contact_with_quanitity: values.contactWith.length
//     });
//     actions.setSubmitting(false);
//   }
// })(InnerForm);

// export default LogContactForm;
