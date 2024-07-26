import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface ICardImageProps {
  title?: string;
  img?: string;
  subTitle?: string;
  children?: any;
}

export const CardImage = ({ title, img, subTitle, children }: ICardImageProps) => {
  return (
    <div style={{ minWidth: 275, border: "2px solid #0087FF", borderRadius: "5px", background: "white" }}>
      {img &&
        <div
          style={{
            width: "100%",
            height: "168px",
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "3px 3px 0px 0px"
          }}
        />
      }
      <CardContent>
        {title &&
          <Typography variant="h5" component="div" color={"#003876"} fontWeight="bold" gutterBottom>
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
    </div>
  );
}
