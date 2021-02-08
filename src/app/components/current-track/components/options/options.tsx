import React from 'react';
import { Lyrics } from '@ui/lyrics';
import { Controls } from './components/controls';
import './options.sass';

export const Options: React.FC = () => (
  <div className="options">
    <div className="options__lyrics">
      <Lyrics />
    </div>

    <Controls />
  </div>
);
