import React, { useState } from 'react';
import { IoRepeat } from 'react-icons/io5';
import classNames from 'classnames';
import './repeat.sass';

export const Repeat: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = classNames(`repeat`, {
    'repeat_active': isActive,
  });

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={classes}
      onClick={onClick}
      title="Repeat"
    >
      <IoRepeat size={20} />
    </button>
  );
};
