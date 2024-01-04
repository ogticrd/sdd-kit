import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import SearchBox from '../searchbox';
import HeaderMenu from './menu';
import LinksOfInterest from '../links-of-interest';

export interface MenuItem {
  name: string;
  path: string;
  external?: boolean;
  children?: MenuItem[];
}
export interface HeaderProps {
  logo: any;
  dark?: boolean;
  menuItems: MenuItem[];
  searchBox?: { onSearch: (value: string) => void };
  customElements?: React.ReactNode[];
}

export const Header = ({
  logo,
  dark,
  menuItems,
  searchBox,
  customElements,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`${dark ? 'bg-blue-900' : 'bg-white'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src={logo} alt="logo" className="w-28" />
        <span className="flex items-center gap-4">
          {searchBox && (
            <SearchBox
              onSearch={searchBox.onSearch}
              placeholder="¿Qué quieres buscar?"
            />
          )}
          {searchBox && <div className="h-12 border-l border-gray-300"></div>}
          <LinksOfInterest dark={dark} />
          {customElements?.length &&
            customElements.map((element, index) => (
              <>
                <div className="h-12 border-l border-gray-300"></div>
                <div key={index}>{element}</div>
              </>
            ))}
          <span className="flex items-center md:hidden ">
            <div className="h-12 border-l border-gray-300"></div>
            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              color="primary"
            >
              {isMenuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </IconButton>
          </span>
        </span>
      </div>
      {menuItems?.length && (
        <HeaderMenu menuItems={menuItems} isMenuOpen={isMenuOpen} />
      )}
    </header>
  );
};
