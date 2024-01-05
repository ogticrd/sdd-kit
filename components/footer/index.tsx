import * as React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Box } from '@mui/material';

import { GridContainer, GridItem } from '../grid';
import { Typography } from '../typography';
import { IconButton } from '../iconButton';

import { theme } from '../../theme';

interface FooterInternalProps {
  children: React.ReactNode;
}

export interface FooterProps {
  contact?: {
    phone?: string;
    fax?: string;
    email?: string;
  };
  logo?: string;
  social?: {
    facebook?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
  };
  links?: {
    terms?: string;
    privacy?: string;
    faq?: string;
  };
  address?: string;
  institutionFullName?: string;
}

export const FooterContent = ({ children }: FooterInternalProps) => {
  return (
    <Box
      style={{ padding: '75px 25px', background: theme.palette.primary.main }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: 'auto',
          padding: '0px 24px',
        }}
      >
        {children}
      </div>
    </Box>
  );
};

export const FooterBottom = ({ children }: FooterInternalProps) => {
  return (
    <div style={{ background: 'white', padding: '12.5px 25px' }}>
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: 'auto',
          padding: '0px 24px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <div>
      <FooterContent>
        <GridContainer spacing={4}>
          <GridItem md={12} lg={3}>
            <div style={{ display: 'flex' }}>
              <img
                src={
                  props.logo ||
                  'https://b2368105.smushcdn.com/2368105/wp-content/uploads/2021/06/logo.png?lossy=0&strip=1&webp=1'
                }
                alt="logo institucion"
                width="241"
                height="90"
              />
            </div>
          </GridItem>
          <GridItem md={12} lg={9}>
            <GridContainer spacing={4}>
              <GridItem md={6} lg={3}>
                <Typography fontWeight="500" fontSize={16} color="white">
                  CONÓCENOS
                </Typography>
                <br />
                <Typography color="white" fontWeight="400" fontSize="16">
                  {props.institutionFullName}
                </Typography>
              </GridItem>

              <GridItem md={6} lg={3}>
                <Typography fontWeight="500" fontSize={16} color="white">
                  CONTÁCTANOS
                </Typography>
                <br />
                {props.contact?.phone && (
                  <Typography color="white" fontWeight="400" fontSize="16">
                    Tel: {props.contact?.phone}
                  </Typography>
                )}
                {props.contact?.fax && (
                  <Typography color="white" fontWeight="400" fontSize="16">
                    Fax: {props.contact?.fax}
                  </Typography>
                )}
                <Typography
                  color="white"
                  className="truncate"
                  fontWeight="400"
                  fontSize="16"
                >
                  {props.contact?.email}
                </Typography>
              </GridItem>

              <GridItem md={6} lg={3}>
                <Typography fontWeight="500" fontSize={16} color="white">
                  BÚSCANOS
                </Typography>
                <br />
                <Typography color="white" fontWeight="400" fontSize="16">
                  {props.institutionFullName} <br />
                  {props.address}
                </Typography>
              </GridItem>

              <GridItem md={6} lg={3}>
                <Typography fontWeight="500" fontSize={16} color="white">
                  INFÓRMATE
                </Typography>
                <br />
                <Typography color="white" fontWeight="400" fontSize="16">
                  <a
                    href={props.links?.terms}
                    target="_blank"
                    className="block cursor-pointer hover:underline"
                  >
                    Términos y Condiciones
                  </a>
                  <a
                    href={props.links?.privacy}
                    target="_blank"
                    className="block cursor-pointer hover:underline"
                  >
                    Política de Privacidad
                  </a>
                  <a
                    href={props.links?.faq}
                    target="_blank"
                    className="block cursor-pointer hover:underline"
                  >
                    Preguntas Frecuentes
                  </a>
                </Typography>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </FooterContent>

      <FooterBottom>
        <GridContainer>
          <GridItem md={6} lg={6}>
            <div style={{ marginTop: '8px', display: 'flex' }}>
              <Typography variant="caption" fontWeight="600" color="primary">
                © {new Date().getFullYear()} Todos los Derechos Reservados.
                Desarrollado por
              </Typography>
              <img
                style={{ marginLeft: '5px', cursor: 'pointer' }}
                src={
                  props.logo ||
                  'https://b2368105.smushcdn.com/2368105/wp-content/uploads/2021/06/logo.png?lossy=0&strip=1&webp=1'
                }
                alt="logo institucion"
                width="55"
                onClick={() => window.open('/')}
              />
            </div>
          </GridItem>
          <GridItem md={6} lg={6}>
            <div style={{ display: 'flex' }}>
              <span style={{ margin: 'auto', marginRight: '10px' }}>
                <Typography variant="body2" fontWeight="bold" color="primary">
                  SÍGUENOS
                </Typography>
              </span>

              {/* <IconButton>
                <FacebookIcon />
              </IconButton> */}

              {props.social?.facebook && (
                <a href={props.social.facebook} target="_blank">
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </a>
              )}

              {props.social?.youtube && (
                <a href={props.social.youtube} target="_blank">
                  <IconButton>
                    <YouTubeIcon />
                  </IconButton>
                </a>
              )}

              {props.social?.instagram && (
                <a href={props.social.instagram} target="_blank">
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </a>
              )}

              {props.social?.twitter && (
                <a href={props.social.twitter} target="_blank">
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </a>
              )}
            </div>
          </GridItem>
        </GridContainer>
      </FooterBottom>
    </div>
  );
};
