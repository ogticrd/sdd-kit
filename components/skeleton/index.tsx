import * as React from 'react';
import MUISkeleton from '@mui/material/Skeleton';

export interface IPropsSkeleton {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: number
  height?: number
}

export const Skeleton = ({ variant = 'text', width, height }: IPropsSkeleton) => {
  return (
    <MUISkeleton variant={variant} width={width} height={height} />
  );
}

