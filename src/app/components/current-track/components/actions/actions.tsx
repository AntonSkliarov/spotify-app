import React from 'react';
import { Play } from '../../../ui/play';
import { SkipBackward } from '../../../ui/skip-backward';
import { SkipForward } from '../../../ui/skip-forward';
import './actions.sass';

export const Actions: React.FC = () => (
  <div className="actions">
    <SkipBackward />
    <Play />
    <SkipForward />
  </div>
);
