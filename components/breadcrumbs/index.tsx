import * as React from 'react';
import Typography from '@mui/material/Typography';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export interface IPropsBreadcrumbs {
  links: ILinks[];
}

interface ILinks {
  name: string;
  link: string;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Breadcrumbs = ({ links = [] }: IPropsBreadcrumbs) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        {links[0] && links.map((link, index) => (
          <Link key={index} underline="hover" color="inherit" href="/">
            {link.name}
          </Link>
        ))}
        {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
      </MUIBreadcrumbs>
    </div>
  );
}
