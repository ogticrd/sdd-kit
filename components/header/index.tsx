import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Link } from '@mui/material';
import SearchBox from '../searchbox';
import HeaderMenu from './menu';
import LinksOfInterest from '../links-of-interest';

export interface IMenuItem {
  name: string;
  path: string;
  external?: boolean;
  children?: IMenuItem[];
}
export interface IHeaderProps {
  logo: any;
  logoWidth?: number;
  dark?: boolean;
  menuItems?: IMenuItem[];
  searchBox?: { onSeach: (value: string) => void };
  customElements?: React.ReactNode[];
  customLinks?: React.ReactNode[];
}

export const Header = ({ logo, logoWidth, dark, menuItems, searchBox, customElements, customLinks }: IHeaderProps) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`${dark ? 'bg-blue-900' : 'bg-white'}`} style={{ position: "absolute", width: "100%" }}>
      <div className='container mx-auto flex items-center justify-between px-4 py-2'>
        <img style={{ cursor: "pointer" }} src={logo} alt='logo' width={logoWidth ? logoWidth : 220} />
        <span className='flex items-center gap-4'>
          {customLinks?.length && customLinks.map((element, index) =>
            <div key={index}>{element}</div>
          )}
          {searchBox && <SearchBox onSearch={searchBox.onSeach} />}
          {searchBox && <div className='h-12 border-l border-gray-300'></div>}
          <LinksOfInterest dark={dark} />
          {customElements?.length && customElements.map((element, index) =>
            <>
              <div className='h-12 border-l border-gray-300'></div>
              <div key={index}>{element}</div>
            </>
          )}
          <span className='flex items-center md:hidden'>
            <div className='h-12 border-l border-gray-300'></div>
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon htmlColor={dark ? '#fff' : 'rgb(30 58 138)'} fontSize='large' /> : <MenuIcon htmlColor={dark ? '#fff' : 'rgb(30 58 138)'} fontSize='large' />}
            </IconButton>
          </span>
        </span>
      </div>
      {menuItems?.length &&
        <HeaderMenu menuItems={menuItems} isMenuOpen={isMenuOpen} />
      }
    </header>
  );
}
