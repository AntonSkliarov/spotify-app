import React, { useContext } from 'react';
import { ArtistContext, IArtistContext } from '@artistProvider';
import './artist-listeners.sass';
import { FUNC } from '@helpers/_functions';

export const ArtistListeners: React.FC = () => {
  const { artist } = useContext<IArtistContext>(ArtistContext);

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