import React, { useState } from 'react';
import { IoRepeat } from 'react-icons/io5';
import classNames from 'classnames';
import './repeat.sass';

export const Repeat: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={classNames(`repeat`, {
        'repeat_active': isActive,
      })}
      onClick={onClick}
    >
      <IoRepeat size={20} />
    </button>
  );
};
