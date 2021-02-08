import React, { useState } from 'react';
import classNames from 'classnames';
import { ImShuffle } from "react-icons/im";
import './shuffle.sass';


export const Shuffle: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = classNames(`shuffle`, {
    'shuffle_active': isActive,
  });

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={classes}
      onClick={onClick}
      title='Shuffle'
    >
      <ImShuffle />
    </button>
  );
};
