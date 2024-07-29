import React from 'react';
import MUIAlert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

export interface IAlertProps {
  severity?: 'info' | 'success' | 'warning' | 'error'
  variant?: 'filled' | 'outlined' | 'standard';
  text: string;
  title?: string;
}

export const Alert = ({
  severity = 'info',
  variant = 'filled',
  text,
  title,
}: IAlertProps) => {

  return (
    <MUIAlert variant={variant} severity={severity}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {text}
    </MUIAlert>
  );
}
