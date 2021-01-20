import React from 'react';
import { IoIosSkipForward } from 'react-icons/io';
import './skip-forward.sass';

export const SkipForward: React.FC = () => (
  <button className="skip-forward" type="button">
    <IoIosSkipForward size={25}/>
  </button>
);
