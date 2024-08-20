import React from 'react';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export interface BreadcrumbsChildren {
  name: string;
  link: string;
}

export interface BreadcrumbsProps {
  links: BreadcrumbsChildren[];
}


export const Breadcrumbs = ({ links = [] }: BreadcrumbsProps) => {

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
