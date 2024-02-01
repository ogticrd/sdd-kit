import * as React from 'react';
import Typography from '@mui/material/Typography';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Breadcrumbs = ({ }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </MUIBreadcrumbs>
    </div>
  );
}
