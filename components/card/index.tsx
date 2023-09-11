import * as React from 'react';
import MUICard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export interface CardProps {
  content?: React.ReactNode;
  actions?: React.ReactNode[];
}

export const Card = ({
  content, actions
}: CardProps) => {
  return (
    <MUICard sx={{ minWidth: 275 }}>
      <CardContent>
        {content}
      </CardContent>
      <CardActions>
        {actions}
      </CardActions>
    </MUICard>
  );
}
