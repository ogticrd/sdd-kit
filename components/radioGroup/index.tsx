import * as React from 'react';
import Radio from '@mui/material/Radio';
import MUIRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  label: string;
  value: string;
  onChange: (val: string) => void;
}

export const RadioGroup = (props: RadioGroupProps) => {
  const [value, setValue] = React.useState<string>(props.value);

  React.useEffect(() => {
    setValue(props?.value);
    if (props?.value) props.onChange(props?.value);
  }, [props.value]);

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        {props?.label}
      </FormLabel>
      <MUIRadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {(props.options || []).map((option: RadioOption) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={option.disabled}
            checked={value === option.value}
            onChange={() => setValue(option.value)}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
};
