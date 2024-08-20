import React from 'react';
import MUIIconButton from '@mui/material/IconButton';

export interface IconButtonProps {
  color?: 'info' | 'success' | 'warning' | 'error' | 'primary'
  children: any;
}

export const IconButton = ({
  color = 'primary',
  children
}: IconButtonProps) => {
  return (
    <MUIIconButton color={color}>
      {children}
    </MUIIconButton>
  );
}
