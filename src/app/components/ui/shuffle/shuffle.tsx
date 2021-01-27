import React, { useState } from 'react';
import classNames from 'classnames';
import { ImShuffle } from "react-icons/im";
import './shuffle.sass';


export const Shuffle: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={classNames(`shuffle`, {
        'shuffle_active': isActive,
      })}
      onClick={onClick}
    >
      <ImShuffle />
    </button>
  );
};