import React from 'react';
import MUIBox from '@mui/material/Box';

export interface IBoxProps {
  children: React.ReactNode;
}

export const Box = ({ children }: IBoxProps) => {

  return (
    <MUIBox>
      {children}
    </MUIBox>
  );
}
