import React from 'react';
import MUIIconButton from '@mui/material/IconButton';

export interface IIconButtonProps {
  color?: 'info' | 'success' | 'warning' | 'error' | 'primary'
  children: any;
}

export const IconButton = ({
  color = 'primary',
  children
}: IIconButtonProps) => {
  return (
    <MUIIconButton color={color}>
      {children}
    </MUIIconButton>
  );
}
