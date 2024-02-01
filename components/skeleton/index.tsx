import * as React from 'react';
import MUISkeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export interface ISkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: number
  height?: number
  fontSize?: string
}

export const Skeleton = ({ variant = 'text' }: ISkeletonProps) => {
  return (
    <Stack spacing={1}>
      <MUISkeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <MUISkeleton variant="circular" width={40} height={40} />
      <MUISkeleton variant="rectangular" width={210} height={60} />
      <MUISkeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}

