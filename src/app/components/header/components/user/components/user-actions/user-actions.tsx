import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { DropdownMenu } from './components';
import './user-actions.sass';

export const UserActions: React.FC = () => (
  <div className="user-actions">
    <button className="button user-actions__button" type="button">
      <IoChevronDown size={25} />
    </button>

    <DropdownMenu />
  </div>
);