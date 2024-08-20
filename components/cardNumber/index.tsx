import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface CardNumberProps {
  number: string;
  description: string;
}

export const CardNumber = ({ number, description }: CardNumberProps) => {
  return (
    <div style={{ minWidth: 275, borderRadius: "5px", background: "#0066cc" }}>
      <CardContent>
        <div style={{ border: "2px solid white", borderRadius: "8px", padding: "10px", width: "55px", textAlign: "center", marginBottom: "80px" }}>
          <Typography variant="h5" color="white" fontWeight="bold">
            {number}
          </Typography>
        </div>
        <Typography sx={{ fontSize: 24 }} color="white">
          {description}
        </Typography>
      </CardContent>
    </div>
  );
}
