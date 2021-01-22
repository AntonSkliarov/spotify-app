import React, { useContext } from 'react';
import './artist-meta.sass';
import { ArtistContext } from '../../../../../../artist';
import { IMainArtist } from '../../../../../../../../../../../helpers/interfaces';
import { ActionButton } from '../../../../../../../../../ui/action-button';

export const ArtistMeta: React.FC = () => {
  const artist = useContext<IMainArtist>(ArtistContext);

  return (
    <div className="artist-meta">
      <div className="artist-meta__type">
        Artist
      </div>

      <div className="artist-meta__name">
        {artist.name}
      </div>

      <div className="artist-meta__actions">
        <ActionButton type={'play'}/>
      </div>
    </div>
  );
};