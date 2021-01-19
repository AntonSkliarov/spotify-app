import React from 'react';
import { Actions } from './components/actions';
import './current-track.sass';

export const CurrentTrack: React.FC = () => (
  <section className="current-track">
    <Actions />
    <div>Progress</div>
    <div>Options</div>
  </section>
);
