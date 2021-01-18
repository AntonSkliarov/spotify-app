import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { DropdownMenu } from './components';
import './user-actions.sass';

export const UserActions: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="user-actions">
      {!menuOpen && (
        <button
          className="button user-actions__button"
          type="button"
          onClick={onClick}
        >
          <IoChevronDown size={25} />
        </button>
      )}

      {menuOpen && (
      <>
        <button
          className="button user-actions__button"
          type="button"
          onClick={onClick}
        >
          <IoChevronUp size={25} />
        </button>

        <DropdownMenu />
      </>
      )}

    </div>
  );
};
