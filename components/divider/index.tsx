import React from 'react';
import MUIDivider from '@mui/material/Divider';

export interface DividerProps {
  children?: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right'
  margin?: boolean
}

export const Divider = ({ children, textAlign = 'center', margin }: DividerProps) => {
  return (
    <MUIDivider sx={{ marginY: margin ? "16px" : 0 }} textAlign={textAlign}>
      {children}
    </MUIDivider>
  );
}
