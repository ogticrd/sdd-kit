import * as React from 'react';
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { theme } from '../../theme';

export interface ICardProps {
  title?: string;
  subTitle?: string;
  children?: any;
  dark?: boolean;
}

export const Card = ({ title, subTitle, children, dark }: ICardProps) => {
  return (
    <MUICard sx={{
      minWidth: 275,
      border: `${dark ? "" : "1px solid #E2E2E2"}`,
      borderTop: `${dark ? "" : "4px solid red"}`,
      boxShadow: "0px 3px 6px #f3f3f3",
      background: `${dark ? theme.palette.primary.main : ""}`,
    }}
      elevation={0}
    >
      <CardContent sx={{ color: `${dark ? "#fff" : ""}` }}>
        {title &&
          <Typography sx={{ color: `${dark ? "#fff" : ""}` }} variant="h5" component="div" color={theme.palette.primary.main} fontWeight="bold" gutterBottom>
            {title}
          </Typography>
        }
        {subTitle &&
          <Typography sx={{ fontSize: 14, color: `${dark ? "#fff" : ""}` }} color="text.secondary" gutterBottom>
            {subTitle}
          </Typography>
        }
        {children}
      </CardContent>
    </MUICard>
  );
}
