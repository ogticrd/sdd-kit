import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface CardElevatedImageProps {
  title?: string;
  img?: string;
  description?: string;
}

export const CardElevatedImage = ({ title, img, description }: CardElevatedImageProps) => {
  return (
    <div style={{ minWidth: 275, boxShadow: "0px 3px 6px #f3f3f3", borderRadius: "5px", background: "white" }}>
      {img &&
        <div style={{ display: "flex", justifyContent: "center", marginTop: "120px" }}>
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              marginTop: "-120px",
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      }
      <CardContent style={{ textAlign: "center" }}>
        {title &&
          <Typography sx={{ fontSize: 24, color: "black" }} component="div" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
        }
        {description &&
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            {description}
          </Typography>
        }
      </CardContent>
    </div>
  );
}
