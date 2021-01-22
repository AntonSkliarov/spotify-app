import React, { useContext } from 'react';
import './artist-image.sass';
import { ArtistContext } from '../../../../../../artist';
import { IMainArtist } from '../../../../../../../../../../../helpers/interfaces';
import { HiCheck } from "react-icons/hi";

export const ArtistImage: React.FC = () => {
  const artist = useContext<IMainArtist>(ArtistContext);

  return (
    <div className="artist-image">
      <img
        className="artist-image__photo"
        src={artist.photo}
        alt={artist.name}
      />
      <span className="artist-image__authorized">
        <HiCheck size={13}/>
      </span>
    </div>
  );
};