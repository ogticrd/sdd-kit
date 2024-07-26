import React from 'react'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';

import { Typography } from '../typography'

export interface IDownloadsItem {
  name: string;
  onClick?: () => void;
}

export interface IDownloadsProps {
  name: string;
  items: IDownloadsItem[];
}

export const Downloads = ({ name, items = [] }: IDownloadsProps) => {
  return (
    <div>
      <Typography variant="body2" fontSize={16} fontWeight={700} gutterBottom>
        {name}
      </Typography>
      {items &&
        items.map((item: IDownloadsItem, index: number) => (
          <div key={index} onClick={item.onClick} style={{ width: "100%", display: "flex", alignItems: "center", cursor: "pointer", marginBottom: "5px" }}>
            <InsertDriveFileOutlinedIcon color="info" fontSize="small" style={{ marginRight: "10px" }} />
            <div style={{ flexGrow: "1" }}>
              <Typography variant="body2">
                {item.name}
              </Typography>
            </div>
            <SaveAltOutlinedIcon color="secondary" fontSize="small" />
          </div>
        ))
      }
    </div>
  )
}
