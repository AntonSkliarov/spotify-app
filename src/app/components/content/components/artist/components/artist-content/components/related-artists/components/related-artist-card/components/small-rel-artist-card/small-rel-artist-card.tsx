import React from 'react';
import './small-rel-artist-card.sass';
import { IRelatedArtists } from '@helpers/interfaces';

interface SmallArtistCardProps {
  artist: IRelatedArtists;
}

export const SmallRelArtistCard: React.FC<SmallArtistCardProps> = ({ artist }) => {
  return (
    <li className="related-artist-card related-artist-card_small">
      <a className="related-artist-card__link" href={artist.spotify}>
        <span>
          <img
            className="related-artist-card__image"
            src={artist.image}
            alt={artist.name}
          />
        </span>

        <span className="related-artist-card__name related-artist-card__name_small">
          {artist.name}
        </span>

      </a>
    </li>
  );
};
