import React from 'react';
import { Actions } from './components/actions';
import { Options } from './components/options';
import { Progress } from './components/progress';
import './current-track.sass';

export const CurrentTrack: React.FC = () => (
  <section className="current-track">
    <Actions />
    <Progress />
    <Options />
  </section>
);
