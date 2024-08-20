import React from 'react'
import MUIButton from '@mui/material/Button';

export interface ButtonProps {
  disabled?: boolean;
  submit?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  children: React.ReactNode;
  startIcon?: any;
  endIcon?: any;
  size?: 'small' | 'medium' | 'large' | undefined;
  color?:
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  fontWeight?: boolean;
}

export const Button = ({
  disabled,
  variant = 'contained',
  submit,
  onClick,
  fullWidth,
  children,
  size = 'medium',
  startIcon = null,
  endIcon = null,
  color,
  fontWeight
}: ButtonProps) => {
  return (
    <MUIButton
      size={size}
      variant={variant}
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      color={color ? color : 'primary'}
      fullWidth={fullWidth ? true : false}
      startIcon={startIcon}
      endIcon={endIcon}
      style={{ fontWeight: fontWeight ? "bold" : "normal" }}
    >
      {children}
    </MUIButton>
  );
};
