import React from 'react';
import './small-rel-artist-card.sass';
import { IRelatedArtists } from '@helpers/interfaces';

interface SmallArtistCardProps {
  artist: IRelatedArtists;
}

export const SmallRelArtistCard: React.FC<SmallArtistCardProps> = ({ artist }) => {
  return (
    <li className="small-rel-artist-card">
      <a className="small-rel-artist-card__link" href={artist.spotify}>
        <span>
          <img
            className="small-rel-artist-card__image"
            src={artist.image}
            alt={artist.name}
          />
        </span>

        <span className="small-rel-artist-card__name">
          {artist.name}
        </span>

      </a>
    </li>
  );
};
