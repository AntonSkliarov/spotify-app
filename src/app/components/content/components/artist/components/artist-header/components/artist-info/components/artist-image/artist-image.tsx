import React, { useContext } from 'react';
import './artist-image.sass';
import { ArtistContext } from '../../../../../../artist';
import { IMainArtist } from '../../../../../../../../../../../helpers/interfaces';

export const ArtistImage: React.FC = () => {
  const artist = useContext<IMainArtist>(ArtistContext);

  return (
    <div className="artist-image">
      <img
        className="artist-image__photo"
        src={artist.photo}
        alt={artist.name}
      />
    </div>
  );
};