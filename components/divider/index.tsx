import * as React from 'react';
import MUIDivider from '@mui/material/Divider';

export interface IDividerProps {
  children?: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right'
}

export const Divider = ({ children, textAlign = 'center' }: IDividerProps) => {
  return (
    <MUIDivider textAlign={textAlign}>
      {children}
    </MUIDivider>
  );
}
