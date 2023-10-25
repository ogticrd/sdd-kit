import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface IProgressProps {
  value: number;
}

export const Progress = ({ value }: IProgressProps) => {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
}
