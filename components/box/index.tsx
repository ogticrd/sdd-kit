import * as React from 'react';
import MUIBox from '@mui/material/Box';

export interface IPropsContainer {
  children: React.ReactNode;
}

export const Box = ({ children }: IPropsContainer) => {

  return (
    <MUIBox>
      {children}
    </MUIBox>
  );
}
