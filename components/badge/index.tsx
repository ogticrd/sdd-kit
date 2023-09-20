import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export interface IBadgeProps {
  color?: 'info' | 'success' | 'warning' | 'error' | 'primary'
  variant?: 'outlined' | 'filled';
  size?: 'small' | 'medium'
  label: string;
}

export const Badge = ({
  color = 'info',
  variant = 'outlined',
  size = 'medium',
  label
}: IBadgeProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} variant={variant} size={size} color={color} />
    </Stack>
  );
}
