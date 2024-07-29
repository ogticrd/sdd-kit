import React, { useState } from 'react';
import MUICheckbox from '@mui/material/Checkbox';

export interface ICheckboxProps {
  checked: boolean;
  onChange: (val: boolean) => void;
}

export const Checkbox = ({ checked, onChange }: ICheckboxProps) => {

  const [value, setValue] = useState<boolean>(checked);

  return (
    <MUICheckbox
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
        onChange(event.target.checked);
      }}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
