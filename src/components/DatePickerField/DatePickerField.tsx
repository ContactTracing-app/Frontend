import * as React from 'react';
import DatePicker from 'react-date-picker';
import { useField, FieldConfig } from 'formik';
import { FormControl, FormLabel, Input } from '@chakra-ui/core';

/*
const DatePickerField: React.FC<FieldProps> = ({ props }) => {
  const [field, meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;
  return (
    
    <FormControl>
      <FormLabel htmlFor={field.name}>Unknown</FormLabel>
      <DatePicker {...field} {...props} onChange={setValue} value={value} />

      {/* {helpText && (
        <FormHelperText id={`${name}-helper-text`}>{helpText}</FormHelperText>
      )} 
    </FormControl>
  );
};
*/

type FormikTextInputFieldProps = Pick<FieldConfig, 'name'> &
  React.InputHTMLAttributes<HTMLInputElement>;

function FormikTextInputField({ name, ...rest }: FormikTextInputFieldProps) {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;
  debugger;

  return <DatePicker onChange={setValue} value={value[name]} />;
}
export default FormikTextInputField;
