import React, { useState } from 'react';
import MUISnackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface ISnackbarProps {
  openMessage: boolean;
  message: string;
  autoHideDuration?: number;
}

export const Snackbar = ({ openMessage = true, message, autoHideDuration }: ISnackbarProps) => {
  const [open, setOpen] = useState(openMessage);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <MUISnackbar
      open={open}
      autoHideDuration={autoHideDuration ? autoHideDuration : 6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
}
