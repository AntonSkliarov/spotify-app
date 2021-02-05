import React, { useState } from 'react';
import classNames from 'classnames';
import { IoPhonePortraitSharp } from 'react-icons/io5';
import './devices.sass';

export const Devices: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={classNames(`devices`, {
        'devices_active': isActive,
      })}
      onClick={onClick}
    >

      <span className="devices__icon">
        <IoPhonePortraitSharp />
      </span>
    Devices Available
    </button>
  );
};
