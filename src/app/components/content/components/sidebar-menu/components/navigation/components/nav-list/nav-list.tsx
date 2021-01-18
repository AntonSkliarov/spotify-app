import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import './nav-list.sass';
import { IUser, IPlaylist, IMain, IYourMusic } from '../../../../../../../../../helpers/interfaces';

export type NavTitleType = 'main' | 'your music' | 'playlists';
export type NavItemType = IPlaylist | IMain | IYourMusic;

interface NavListProps {
  title: NavTitleType;
  user: IUser;
}

export const NavList: React.FC<NavListProps> = ({ title, user }) => {

  return (
    <div className="nav-list">
      <button className="nav-list__button" type="button">
        {title}
        <IoChevronDown />
      </button>

      <ul>
        {user.main.map((item: NavItemType) => (
          <li key={item.id}>
            <a href="#">
              Icon
          <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
