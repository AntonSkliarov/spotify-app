import React from 'react';
import { Devices } from '@ui/devices';
import { Queue } from '@ui/queue';
import { Repeat } from '@ui/repeat';
import { Shuffle } from '@ui/shuffle';
import { Volume } from '@ui/volume';
import './controls.sass';

export const Controls: React.FC = () => (
  <div className="controls">
    <Queue />
    <Shuffle />
    <Repeat />
    <Devices />
    <Volume />
  </div>
);
