import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import MUITooltip from '@mui/material/Tooltip';

export const Tooltip = () => {
    return (
        <MUITooltip title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </MUITooltip>
    );
}
