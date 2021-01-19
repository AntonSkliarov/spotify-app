import React, { useState } from 'react';
import { ArrowButton } from '../../../../../ui/arrow-button';
import { DropdownMenu } from './components';
import './user-actions.sass';

export const UserActions: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="user-actions">

      <ArrowButton
        type={menuOpen ? 'up' : 'down'}
        onClick={onClick}
      />

      {menuOpen && <DropdownMenu />}

    </div>
  );
};
