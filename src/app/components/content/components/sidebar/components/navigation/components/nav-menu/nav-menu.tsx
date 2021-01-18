import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import './nav-menu.sass';
import { IUser } from '../../../../../../../../../helpers/interfaces';
import { MenuList } from './components';

export type NavMenuTitleType = 'main' | 'your music' | 'playlists';

export interface NavMenuProps {
  title: NavMenuTitleType;
  user: IUser;
}

export const NavMenu: React.FC<NavMenuProps> = ({ title, user }) => {

  return (
    <div className="nav-menu">
      <button className="nav-menu__button" type="button">
        {title}
        <IoChevronDown />
      </button>

      <MenuList
        title={title}
        user={user}
      />
    </div>
  );
};
