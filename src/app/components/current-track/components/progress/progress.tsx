import React from 'react';
import './progress.sass';
import currentTrack from '../../../../../api/currentTrack.json';
import { ITrack } from '../../../../../helpers/interfaces';
import { msToMinAndSec } from '../../../../../helpers/_functions';
import { SongProgress } from '../../../ui/song-progress';

const track: ITrack = currentTrack.track;

export const Progress: React.FC = () => (
  <div className="progress">
    <div className="progress__start">
      0:01
    </div>

    <div className="progress__bar">
      <SongProgress />
    </div>

    <div className="progress__end">
      {msToMinAndSec(track.duration)}
    </div>
  </div>
);
