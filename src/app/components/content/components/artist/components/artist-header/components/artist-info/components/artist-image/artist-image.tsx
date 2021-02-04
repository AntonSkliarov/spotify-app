import React, { useContext } from 'react';
import './artist-image.sass';
import { ArtistContext, IArtistContext } from '@artistProvider';
import { HiCheck } from "react-icons/hi";

export const ArtistImage: React.FC = () => {
  const { artist } = useContext<IArtistContext>(ArtistContext);

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