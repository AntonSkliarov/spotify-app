import React from 'react';
import './track.sass';
import { IPopularTracks } from '@helpers/interfaces';
import { AlbumTrack } from './components/album-track';
import { PopularTrack } from './components/popular-track';

type TrackType = 'popular' | 'album';

export interface ITrackProps {
  type: TrackType;
  track: IPopularTracks;
  index: number;
}

export const Track: React.FC<ITrackProps> = ({
  type,
  track,
  index
}) => {

  return (
    <>
      {type === 'album' && (
        <AlbumTrack
          track={track}
          index={index}
        />
      )}

      {type === 'popular' && (
        <PopularTrack
          track={track}
          index={index}
        />
      )}
    </>
  );
};
