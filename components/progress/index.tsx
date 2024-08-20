import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export interface ProgressProps {
  value: number;
}

export const Progress = ({ value }: ProgressProps) => {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
}
