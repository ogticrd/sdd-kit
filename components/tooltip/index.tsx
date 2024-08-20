import React from 'react';
import MUITooltip from '@mui/material/Tooltip';

export interface TooltipProps {
    title: string;
    placement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top" | undefined;
    children: React.ReactNode;
}

export const Tooltip = ({ title, placement, children }: TooltipProps) => {
    return (
        <MUITooltip title={title} placement={placement}>
            <span>
                {children}
            </span>
        </MUITooltip>
    );
}
