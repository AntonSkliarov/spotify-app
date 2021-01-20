import React from 'react';
import { Actions } from './components/actions';
import { Progress } from './components/progress';
import './current-track.sass';

export const CurrentTrack: React.FC = () => (
  <section className="current-track">
    <Actions />
    <Progress />
    <div>Options</div>
  </section>
);
