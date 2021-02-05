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
    <li className="popular-track">
      <div className="popular-track__image-container">
        <img
          className="popular-track__image"
          src={track.albumImage}
          alt={track.title}
        />
      </div>

      <div className="popular-track__number">
        {index + 1}
      </div>

      <div className="popular-track__inFavorites">
        <AddToFavButton inFavorites={track.inFavorites} />
      </div>

      <div className="popular-track__title">
        {track.title}
      </div>

      <div>
        <Explicit />
      </div>

      <div className="popular-track__in-media-library">
        {FUNC.numberWithCommas(track.inMediaLibrary)}
      </div>
    </li>
  );
};
