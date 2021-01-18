import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import './nav-list.sass';

export type NavTitleType = 'main' | 'your music' | 'playlists';

interface NavListProps {
  title: NavTitleType
}

export const NavList: React.FC<NavListProps> = ({ title }) => (
  <div className="nav-list">
    <button className="nav-list__button" type="button">
      {title}
      <IoChevronDown />
    </button>

    <ul>
      <li>
        <a href="#">
          Icon
          <span>item name</span>
        </a>
      </li>
    </ul>
  </div>
);