import React from 'react';
import { Queue } from '../../../../../ui/queue';
import { Shuffle } from '../../../../../ui/shuffle';
import './controls.sass';

export const Controls: React.FC = () => (
  <div className="controls">
    <Queue />
    <Shuffle />
    <button>Refresh</button>
    <button>Devices</button>
    <div className="volume">Volume</div>
  </div>
);
