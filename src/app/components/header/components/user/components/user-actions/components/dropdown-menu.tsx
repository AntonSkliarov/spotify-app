import React from 'react';
import './dropdown-menu.sass';

export const DropdownMenu: React.FC = () => (
  <ul className="dropdown-menu">
    <li className="dropdown-menu__item">
      <a className="dropdown-menu__link" href="#">
        Private Session
      </a>
    </li>

    <li className="dropdown-menu__item">
      <a className="dropdown-menu__link" href="#">
        Account
      </a>
    </li>

    <li className="dropdown-menu__item">
      <a className="dropdown-menu__link" href="#">
        Settings
      </a>
    </li>

    <li className="dropdown-menu__item">
      <a className="dropdown-menu__link" href="#">
        Log Out
      </a>
    </li>
  </ul>
);
