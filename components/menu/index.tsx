import * as React from 'react';
import Button from '@mui/material/Button';
import MUIMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export interface IPropsMenu {
  name: string;
  items: any[];
}

export const Menu = ({ name, items = [] }: IPropsMenu) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {name}
      </Button>
      <MUIMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items &&
          items.map((item: any, index: number) => (
            <MenuItem key={index} onClick={handleClose}>{item.name}</MenuItem>
          ))
        }
      </MUIMenu>
    </div >
  );
}
