import React from "react";
import MUITypography from "@mui/material/Typography";

export interface IPropsTypography {
  children: React.ReactNode;
  variant?: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';
  gutterBottom?: boolean;
  fontWeight?: number | string;
  fontSize?: number | string;
  color?: string
  textAlign?: 'right' | 'left' | 'center'
  lineHeight?: string
}

export const Typography = ({ children, variant, gutterBottom, fontWeight, fontSize, color, textAlign, lineHeight }: IPropsTypography) => {
  return (
    <MUITypography
      variant={variant ? variant : "body1"}
      gutterBottom={gutterBottom}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign ? textAlign : "left"}
      lineHeight={lineHeight}
    >
      {children}
    </MUITypography>
  );
};