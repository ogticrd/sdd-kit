import React from 'react';
import MUISkeleton from '@mui/material/Skeleton';

export interface ISkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: number
  height?: number
}

export const Skeleton = ({ variant = 'text', width, height }: ISkeletonProps) => {
  return (
    <MUISkeleton variant={variant} width={width} height={height} />
  );
}

