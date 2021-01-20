import React from 'react';
import { Lyrics } from '../../../ui/lyrics';
import './options.sass';

export const Options: React.FC = () => (
  <div className="options">
    <Lyrics />

    <div className="controls">
      <button>Navicon</button>
      <button>Shuffle</button>
      <button>Refresh</button>
      <button>Devices</button>
      <div className="volume">Volume</div>
    </div>
  </div>
);