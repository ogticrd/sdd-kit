import React from 'react';
import MUITextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

export interface ITextFieldProps {
  id: string;
  label?: string
  variant: 'outlined' | 'filled' | 'standard';
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning";
  error?: boolean
  helperText?: string
  args?: object
}

export const TextField = ({ id, label, variant = 'outlined', color, error = false, helperText, args = {} }: ITextFieldProps) => {
  console.log(args);
  return (
    <div>
      <MUITextField
        id={id}
        label={label}
        variant={variant}
        color={color}
        error={error}
        {...args}
      />
      <FormHelperText sx={{ color: error ? "#EE2A24" : "gray" }}>
        {helperText}
      </FormHelperText>
    </div>
  );
}
