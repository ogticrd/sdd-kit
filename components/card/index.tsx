import * as React from 'react';
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { theme } from '../../theme';

export interface IProps {
  title?: string;
  subTitle?: string;
  children?: any;
}

export const Card = ({ title, subTitle, children }: IProps) => {
  return (
    <MUICard sx={{ minWidth: 275 }} elevation={0}>
      <CardContent>
        {title &&
          <Typography variant="h5" component="div" color={theme.palette.primary.main} fontWeight="bold" gutterBottom>
            {title}
          </Typography>
        }
        {subTitle &&
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {subTitle}
          </Typography>
        }
        {children}
      </CardContent>
    </MUICard>
  );
}
