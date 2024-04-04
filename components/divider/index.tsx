import * as React from 'react';
import MUIDivider from '@mui/material/Divider';

export interface IDividerProps {
  children?: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right'
  margin?: boolean
}

export const Divider = ({ children, textAlign = 'center', margin }: IDividerProps) => {
  return (
    <MUIDivider sx={{ marginY: margin ? "16px" : 0 }} textAlign={textAlign}>
      {children}
    </MUIDivider>
  );
}
