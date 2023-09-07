import * as React from 'react';
import MUIPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Pagination = () => {
  return (
    <Stack spacing={2}>
      <MUIPagination count={10} shape="rounded" />
      <MUIPagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
