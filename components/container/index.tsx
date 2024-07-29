import React from 'react';
import MUIContainer from '@mui/material/Container';

export interface IContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Container = ({
  children,
  maxWidth = 'lg',
}: IContainerProps) => {

  return (
    <MUIContainer maxWidth={maxWidth}>
      {children}
    </MUIContainer>
  );
}
