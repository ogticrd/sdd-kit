import React from 'react';
import MUITooltip from '@mui/material/Tooltip';

export interface ITooltipProps {
    title: string;
    placement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top" | undefined;
    children: React.ReactNode;
}

export const Tooltip = ({ title, placement, children }: ITooltipProps) => {
    return (
        <MUITooltip title={title} placement={placement}>
            <span>
                {children}
            </span>
        </MUITooltip>
    );
}
