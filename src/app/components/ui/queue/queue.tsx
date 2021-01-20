import React from 'react';
import './queue.sass';
import { RiPlayList2Fill } from "react-icons/ri";

export const Queue: React.FC = () => (
  <button className="queue">
    <RiPlayList2Fill />
  </button>
);
