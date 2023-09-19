import * as React from 'react';
import MUICheckbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkbox = () => {
  return (
    <div>
      <MUICheckbox {...label} />
    </div>
  );
}
