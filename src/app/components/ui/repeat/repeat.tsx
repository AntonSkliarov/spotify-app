import React from 'react';
import { IoRepeat } from 'react-icons/io5';
import './repeat.sass';

export const Repeat: React.FC = () => (
  <button className="repeat">
    <IoRepeat size={20}/>
  </button>
);
