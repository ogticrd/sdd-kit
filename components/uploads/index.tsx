import React from 'react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import { Typography } from '../typography';
import { Button } from '../button';
import { Divider } from '../divider';

export interface IUploadsProps {
  handleFileChange: any
}

export const Uploads = ({ handleFileChange }: IUploadsProps) => {

  const handlePicture = () => {
    document.querySelector<any>('#fileSelector').click()
  }

  return (
    <div>
      <input
        type="file"
        id="fileSelector"
        name="icon"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div style={{ border: '1px solid #DDDFE1', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <CloudUploadOutlinedIcon color='info' sx={{ fontSize: "100px" }} />
          <Typography variant='body2' fontWeight='bold' gutterBottom>Arrastra hasta aquí tu archivo.</Typography>
          <div style={{ margin: "10px 0" }}>
            <Divider>o</Divider>
          </div>
          <Button
            onClick={handlePicture}
          >
            SUBIR ARCHIVO
          </Button>
        </div>
      </div>
    </div>
  );
}
