import React from 'react';
import { IoIosSkipBackward } from 'react-icons/io';
import './skip-backward.sass';

export const SkipBackward: React.FC = () => (
  <button
    className="skip-backward"
    type="button"
    title='Skip-backward'
  >
    <IoIosSkipBackward size={25}/>
  </button>

);
