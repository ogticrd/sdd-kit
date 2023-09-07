import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export interface IProps {
  logo: any;
  logoWidth?: number;
}

export const Header = (props: IProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div style={{ width: '100%', maxWidth: '1400px', margin: 'auto' }}>
          <Toolbar sx={{ padding: '0px', height: '72px' }}>
            <div style={{ flexGrow: 1, paddingTop: '8px' }}>
              <a
                href={
                  '/'
                }
                style={{ color: 'white' }}
              >
                <img src={props.logo} alt="logo" width={props.logoWidth ? props.logoWidth : 200} />
              </a>
            </div>
            <AppsIcon fontSize="large" />
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}
