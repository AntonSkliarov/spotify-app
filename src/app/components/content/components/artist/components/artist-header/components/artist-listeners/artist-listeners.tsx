import React, { useContext } from 'react';
import { ArtistContext } from '../../../../artist';
import './artist-listeners.sass';
import { IMainArtist } from '../../../../../../../../../helpers/interfaces';
import { FUNC } from '../../../../../../../../../helpers/_functions';

export const ArtistListeners: React.FC = () => {
  const artist = useContext<IMainArtist>(ArtistContext);

  return (
    <div className="artist-listeners">
      <div className="artist-listeners__count">
        {FUNC.numberWithCommas(artist.listeners)}
      </div>

      <div className="artist-listeners__label">
        Monthly Listeners
      </div>
    </div>
  );
};