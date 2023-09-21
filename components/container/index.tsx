import * as React from 'react';
import MUIContainer from '@mui/material/Container';

export interface IPropsContainer {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Container = ({
  children,
  maxWidth,
}: IPropsContainer) => {

  return (
    <MUIContainer maxWidth={maxWidth}>
      {children}
    </MUIContainer>
  );
}
