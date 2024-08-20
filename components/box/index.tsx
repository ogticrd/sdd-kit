import React from 'react';
import MUIBox from '@mui/material/Box';

export interface BoxProps {
  children: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {

  return (
    <MUIBox>
      {children}
    </MUIBox>
  );
}
