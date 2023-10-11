import * as React from 'react';
import MUIIconButton from '@mui/material/IconButton';

export interface IPropsIconButton {
  color?: 'info' | 'success' | 'warning' | 'error' | 'primary'
  children: any;
}

export const IconButton = ({
  color = 'primary',
  children
}: IPropsIconButton) => {
  return (
    <MUIIconButton color={color}>
      {children}
    </MUIIconButton>
  );
}
