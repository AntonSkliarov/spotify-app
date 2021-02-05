import React from 'react';
import CSS from 'csstype';
import { IoIosPlay } from 'react-icons/io';
import './large-rel-artist-card.sass';
import { IRelatedArtists } from '@helpers/interfaces';

interface LargeArtistCardProps {
  artist: IRelatedArtists;
}

export const LargeRelArtistCard: React.FC<LargeArtistCardProps> = ({ artist }) => {
  const imgStyles: CSS.Properties = {
    backgroundImage: `url(${artist.image})`
  };

  return (
    <li className="related-artist-card related-artist-card_large">
      <div
        className="related-artist-card__image-container"
        style={imgStyles}
      >

        <span className="related-artist-card__icon">
          <IoIosPlay size={70} />
        </span>
      </div>

      <a
        className="related-artist-card__link related-artist-card__link_large"
        href={artist.spotify}
      >
        <span className="related-artist-card__name related-artist-card__name_large">
          {artist.name}
        </span>
      </a>
    </li>
  );
};
