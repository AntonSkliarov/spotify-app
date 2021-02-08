import React from 'react';
import { Friends } from './components/friends';
import './social.sass';

export const Social: React.FC = () => (
  <div className="social">
    <div className="social__container">
      <Friends />
    </div>
  </div>
);