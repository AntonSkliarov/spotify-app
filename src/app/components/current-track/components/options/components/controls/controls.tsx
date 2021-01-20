import React from 'react';
import { Queue } from '../../../../../ui/queue';
import { Repeat } from '../../../../../ui/repeat';
import { Shuffle } from '../../../../../ui/shuffle';
import './controls.sass';

export const Controls: React.FC = () => (
  <div className="controls">
    <Queue />
    <Shuffle />
    <Repeat />
    <button>Devices</button>
    <div className="volume">Volume</div>
  </div>
);
