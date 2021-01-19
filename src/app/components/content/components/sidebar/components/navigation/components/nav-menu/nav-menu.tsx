import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import './nav-menu.sass';
import { IUser } from '../../../../../../../../../helpers/interfaces';
import { MenuList } from './components';

export type NavMenuTitleType = 'main' | 'your music' | 'playlists';

export interface NavMenuProps {
  title: NavMenuTitleType;
  user: IUser;
}

export const NavMenu: React.FC<NavMenuProps> = ({ title, user }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

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

        {menuOpen
          ? <IoChevronDown />
          : <IoChevronUp />
        }
      </button>

      <MenuList
        title={title}
        user={user}
        isVisible={menuOpen}
      />

    </div>
  );
};
