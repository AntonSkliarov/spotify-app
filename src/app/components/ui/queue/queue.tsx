import React, { useState } from 'react';
import classNames from 'classnames';
import './queue.sass';
import { RiPlayList2Fill } from "react-icons/ri";

export const Queue: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = classNames(`queue`, {
    'queue_active': isActive,
  });

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={classes}
      onClick={onClick}
      title="Queue"
    >
      <RiPlayList2Fill />
    </button>
  );
};
