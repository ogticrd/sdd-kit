import * as React from 'react';
import MUIAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Alert = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <MUIAlert variant="filled" severity="error">
        This is an error alert — check it out!
      </MUIAlert>
      <MUIAlert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </MUIAlert>
      <MUIAlert variant="filled" severity="info">
        This is an info alert — check it out!
      </MUIAlert>
      <MUIAlert variant="filled" severity="success">
        This is a success alert — check it out!
      </MUIAlert>
    </Stack>
  );
}
