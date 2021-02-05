import React, { useState } from 'react';
import classNames from 'classnames';
import { IoNotifications } from 'react-icons/io5';
import './notifications.sass';

export const Notifications: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={classNames(`notifications`, {
        'notifications_active': isActive,
      })}
      type="button"
      onClick={onClick}
      title='Notifications'
    >
      <IoNotifications />
    </button>
  );
};
