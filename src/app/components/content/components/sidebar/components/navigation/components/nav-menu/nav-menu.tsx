import React, { useEffect, useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import './nav-menu.sass';
import { IMenulist } from '@helpers/interfaces';
import { MenuList } from './components';
import { useWindowWidth } from '@helpers/_custom-hooks';

export type NavMenuTitleType = 'main' | 'your music' | 'playlists';

export interface INavMenuProps {
  title: NavMenuTitleType;
  list: IMenulist[];
}

export const NavMenu: React.FC<INavMenuProps> = ({ title, list }) => {
  const windowWidth = useWindowWidth();

  let isMenuOpen: boolean = true;
  if (windowWidth <= 768) {
    isMenuOpen = false;
  }

  const [menuOpen, setMenuOpen] = useState(isMenuOpen);

  useEffect((): void => {
    if (windowWidth <= 768) {
      setMenuOpen(false);
    }

    if (windowWidth > 768 && !menuOpen) {
      setMenuOpen(true);
    }
  }, [windowWidth]);

  const onClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-menu">
      <button
        className="nav-menu__button"
        type="button"
        onClick={onClick}
      >

        {title}

        <span className="nav-menu__button-icon">
          {menuOpen
            ? <IoChevronDown size={15} />
            : <IoChevronUp size={15}/>
          }
        </span>

      </button>

      <MenuList
        title={title}
        list={list}
        isVisible={menuOpen}
      />

    </div>
  );
};
