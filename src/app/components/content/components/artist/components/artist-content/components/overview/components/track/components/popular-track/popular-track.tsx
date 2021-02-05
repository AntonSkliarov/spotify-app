import React from 'react';
import { IPopularTracks } from '@helpers/interfaces';
import { AddToFavButton } from '@ui/add-to-fav-button';
import { Explicit } from '@ui/explicit';
import { FUNC } from '@helpers/_functions';
import './popular-track.sass';

export interface IPopularTrackProps {
  track: IPopularTracks;
  index: number;
}

export const PopularTrack: React.FC<IPopularTrackProps> = ({ track, index }) => {
  return (
    <li className="track track__popular">
      <div className="track__image-container">
        <img
          className="track__image"
          src={track.albumImage}
          alt={track.title}
        />
      </div>

      <div className="track__number">
        {index + 1}
      </div>

      <div className="track__inFavorites">
        <AddToFavButton inFavorites={track.inFavorites} />
      </div>

      <div className="track__title">
        {track.title}
      </div>

      <div>
        <Explicit />
      </div>

      <div className="track__in-media-library">
        {FUNC.numberWithCommas(track.inMediaLibrary)}
      </div>
    </li>
  );
};
