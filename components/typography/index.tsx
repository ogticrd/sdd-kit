import React from "react";
import { Typography } from "@mui/material";

export interface IProps {
  children: React.ReactNode;
  variant?: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';
  gutterBottom?: boolean;
}

export const TypographyApp = ({ children, variant, gutterBottom }: IProps) => {
  return (
    <Typography variant={variant ? variant : "body1"} gutterBottom={gutterBottom}>
      {children}
    </Typography>
  );
};