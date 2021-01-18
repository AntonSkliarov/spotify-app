import React from 'react';
import './menu-list.sass';
import { NavMenuProps } from '../nav-menu';
import { IPlaylist, IMain, IYourMusic } from '../../../../../../../../../../helpers/interfaces';
import { ICONS } from '../../../../../../../../../../helpers/_constants';

export type NavMenuItemType = IPlaylist | IMain | IYourMusic;

export const MenuList: React.FC<NavMenuProps> = ({ user, title }) => {
  return (
    <ul className="menu-list">
      {user[title].map((item: NavMenuItemType, index: number) => (
        <li className="menu-list__item" key={item.id}>

          <a className="menu-list__link" href="#">
            <span className="menu-list__icon">
              {ICONS[title][index].icon}
            </span>

            <span className="menu-list__title">
              {item.name}
            </span>
          </a>

        </li>
      ))}
    </ul>
  );
};
