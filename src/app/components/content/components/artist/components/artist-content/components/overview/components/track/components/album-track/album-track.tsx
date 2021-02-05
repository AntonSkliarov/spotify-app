import React from 'react';
import './album-track.sass';
import { IPopularTracks } from '@helpers/interfaces';
import { AddToFavButton } from '@ui/add-to-fav-button';
import { Explicit } from '@ui/explicit';
import { FUNC } from '@helpers/_functions';
import { IoMdTrendingUp, IoMdTrendingDown } from 'react-icons/io';

export interface IAlbumTrackProps {
  track: IPopularTracks;
  index: number;
}

export const AlbumTrack: React.FC<IAlbumTrackProps> = ({ track, index }) => {
  return (
    <li className="album-track">
      <div className="album-track__number">
        {index + 1}
      </div>

      <div className="album-track__inFavorites">
        <AddToFavButton inFavorites={track.inFavorites} />
      </div>

      <div className="album-track__title">
        {!track.feat
          ? track.title
          : (
            <>
              {`${track.title} - `}
              <span className="album-track__title-feat">
                {track.feat}
              </span>
            </>
          )}
      </div>

      <div className="album-track__explicit">
        <Explicit />
      </div>

      <div className="album-track__duration">
        {FUNC.msToMinAndSec(track.duration)}
      </div>

      <div className="album-track__popularity">
        {track.inFavorites
          ? <IoMdTrendingUp />
          : <IoMdTrendingDown />
        }
      </div>

    </li>
  );
};
