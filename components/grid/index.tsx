import React from 'react';
import Grid from '@mui/material/Grid';

export interface IGridContainerProps {
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
}: IGridContainerProps) => (
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

export interface IGridProps {
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const GridItem = ({
  children,
  xs = 12,
  sm = 12,
  md = 6,
  lg = 4,
  xl,
}: IGridProps) => (
  <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    {children}
  </Grid>
);
