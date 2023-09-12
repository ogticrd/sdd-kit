import * as React from 'react';
import Box from '@mui/material/Box';
import MUITextField from '@mui/material/TextField';

export interface IProps {
  id: string;
  label?: string
  variant: 'outlined' | 'filled' | 'standard';
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning";
  args?: object
}

export const TextField = ({ id, label, variant = 'outlined', color, args = {} }: IProps) => {
  console.log(args);
  return (
    <MUITextField
      id={id}
      label={label}
      variant={variant}
      color={color}
      {...args}
    />
  );
}
