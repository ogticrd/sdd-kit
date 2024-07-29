import React from 'react';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export interface IBreadcrumbsChildren {
  name: string;
  link: string;
}

export interface IBreadcrumbsProps {
  links: IBreadcrumbsChildren[];
}


export const Breadcrumbs = ({ links = [] }: IBreadcrumbsProps) => {

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

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
