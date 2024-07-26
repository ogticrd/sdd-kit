import React from 'react';
import { Typography } from "../typography";

export interface ICardListProps {
  title?: string;
  subTitle?: string;
  image?: any;
  status?: string;
  tags?: string[];
}

export const CardList = ({ title, subTitle, image, status, tags = [] }: ICardListProps) => {
  return (
    <div style={{
      background: "white",
      borderTop: "3px solid #003876",
      boxShadow: "17px 17px 80px 0px #0000001A",
      padding: "5px 17px",
      borderRadius: "4px",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        minHeight: "90px",
      }}>
        {image &&
          <div>
            <img src={image} width={57} style={{ minWidth: '57px' }} />
          </div>
        }

        <div style={{ flexGrow: "1", margin: '0 20px' }}>
          <Typography fontWeight={700} fontSize={16} color="primary">
            {title}
          </Typography>
          <Typography fontWeight={500} fontSize={16}>
            {subTitle}
          </Typography>
        </div>

        <div>
          <Typography fontWeight={700} fontSize={16} color="primary" textAlign="right">
            {status && status}
          </Typography>
          <Typography fontWeight={500} fontSize={16} textAlign="right">
            {tags[0] ?
              tags.map((tag, index) => {
                if (index + 1 === tags.length) return tag

                return `${tag} | `
              })
              : null
            }
          </Typography>
        </div>
      </div>
    </div>
  )
}