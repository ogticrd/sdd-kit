import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MUIDrawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface IDrawerProps {
  anchor: Anchor;
  children: React.ReactNode;
}

export const Drawer = ({ children, anchor }: IDrawerProps) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
    </Box>
  );

  return (
    <div key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <MUIDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </MUIDrawer>
    </div>
  );
}
