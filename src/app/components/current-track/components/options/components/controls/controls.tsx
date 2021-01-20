import React from 'react';
import { Queue } from '../../../../../ui/queue';
import './controls.sass';

export const Controls: React.FC = () => (
  <div className="controls">
    <Queue />
    <button>Shuffle</button>
    <button>Refresh</button>
    <button>Devices</button>
    <div className="volume">Volume</div>
  </div>
);
