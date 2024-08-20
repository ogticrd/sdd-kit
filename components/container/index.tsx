import React from 'react';
import MUIContainer from '@mui/material/Container';

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Container = ({
  children,
  maxWidth = 'lg',
}: ContainerProps) => {

  return (
    <MUIContainer maxWidth={maxWidth}>
      {children}
    </MUIContainer>
  );
}
