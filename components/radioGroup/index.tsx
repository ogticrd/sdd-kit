import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import MUIRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  label: string;
  value: string;
  onChange: (val: string) => void;
}

export const RadioGroup = (props: RadioGroupProps) => {

  const [value, setValue] = useState<string>(props.value);

  useEffect(() => {
    setValue(props?.value);
    if (props?.value) props.onChange(props?.value);

  }, [props.value]);

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{props?.label}</FormLabel>
      <MUIRadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {
          (props.options || []).map((option: RadioOption) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
              disabled={option.disabled}
              checked={value === option.value}
              onChange={() => setValue(option.value)}
            />
          ))
        }
      </MUIRadioGroup>
    </FormControl>
  );
}
