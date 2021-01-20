import React from 'react';
import './progress.sass';
import currentTrack from '../../../../../api/currentTrack.json';
import { ITrack } from '../../../../../helpers/interfaces';
import { msToMinAndSec } from '../../../../../helpers/_functions';

const track: ITrack = currentTrack.track;

export const Progress: React.FC = () => (
  <div>
    <div>Progress start</div>
    <div>Progress bar</div>
    <div>
      {msToMinAndSec(track.duration)}
    </div>
  </div>
);
