import React from 'react';
import { IoIosPlay } from 'react-icons/io';
import './play.sass';

export const Play: React.FC = () => (
  <button
    className="play"
    type="button"
    title="Play"
  >
    <IoIosPlay size={37}/>
  </button>
);
