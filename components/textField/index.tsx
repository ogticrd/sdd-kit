import * as React from 'react';
import MUITextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import { theme } from '../../theme';

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
    <>
      <MUITextField
        id={id}
        label={label}
        variant={variant}
        color={color}
        error={error}
        {...args}
      />
      <FormHelperText sx={{ color: error ? theme.palette.secondary.main : "gray" }}>
        {helperText}
      </FormHelperText>
    </>
  );
}
