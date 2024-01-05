import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  label: string;
  value: string;
  onChange: (val: string) => void;
  id?: string;
}

export const Select = (props: SelectProps) => {
  const [value, setValue] = React.useState<string>(props.value);
  props = {
    id: 'demo-simple-select',
    ...props,
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${props.id}-label`}>{props?.label}</InputLabel>
        <MUISelect
          labelId={`${props.id}-label`}
          id={`${props.id}`}
          value={value || ''}
          label={props?.label}
          onChange={handleChange}
        >
          {(props.options || []).map((option: SelectOption) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </Box>
  );
};
