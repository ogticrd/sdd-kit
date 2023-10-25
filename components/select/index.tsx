import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';


interface ISelectOption {
    value: string;
    label: string;
}

interface ISelectProps {
    options: ISelectOption[];
    label: string;
    value: string;
    onChange: (val: string) => void;
}

export const Select = (props: ISelectProps) => {
    const [value, setValue] = React.useState<string>(props.value);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
        props.onChange(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
                <MUISelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value || ''}
                    label={props?.label}
                    onChange={handleChange}
                >
                    {
                        (props.options || []).map((option: ISelectOption) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))
                    }
                </MUISelect>
            </FormControl>
        </Box>
    );
}
