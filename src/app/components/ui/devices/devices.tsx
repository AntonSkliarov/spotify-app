import React from 'react';
import { IoPhonePortraitSharp } from 'react-icons/io5';
import './devices.sass';

export const Devices: React.FC = () => (
  <button className="devices">
    <span className="devices__icon">
      <IoPhonePortraitSharp />
    </span>
    Devices Available
  </button>
);
