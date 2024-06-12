import React from 'react'
import MUIButton from '@mui/material/Button';

export interface IButtonProps {
  disabled?: boolean;
  submit?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
  style?: React.CSSProperties
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
  fontWeight,
  style
}: IButtonProps) => {
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
      sx={{ fontWeight: fontWeight ? "bold" : "normal" }}
      style={style}
    >
      {children}
    </MUIButton>
  );
};
