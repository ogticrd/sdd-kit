import Grid from '@mui/material/Grid';
import React from 'react';

export interface IPropsContainer {
  children: React.ReactNode;
  spacing?: number;
  direction?: 'row' | 'row-reverse' | 'column' | 'column' | 'column-reverse';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
}

export const GridContainer = ({
  children,
  spacing,
  direction,
  justifyContent,
  alignItems,
}: IPropsContainer) => (
  <Grid
    container
    spacing={spacing ? spacing : 0}
    direction={direction ? direction : "row"}
    justifyContent={justifyContent ? justifyContent : 'flex-start'}
    alignItems={alignItems ? alignItems : "flex-start"}
  >
    {children}
  </Grid>
);

export interface IPropsItem {
  children?: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
}

export const GridItem = ({
  children,
  sm = 12,
  md = 6,
  lg = 4,
}: IPropsItem) => (
  <Grid item sm={sm} md={md} lg={lg}>
    {children}
  </Grid>
);
