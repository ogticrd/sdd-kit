import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    options: SelectOption[];
    label: string;
    value: string;
    onChange: (val: string) => void;
}

export const Select = (props: SelectProps) => {
    const [value, setValue] = useState<string>(props.value);

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
                        (props.options || []).map((option: SelectOption) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))
                    }
                </MUISelect>
            </FormControl>
        </Box>
    );
}
