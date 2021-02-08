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
    <li className="large-rel-artist-card">
      <div
        className="large-rel-artist-card__image-container"
        style={imgStyles}
      >

        <span className="large-rel-artist-card__icon">
          <IoIosPlay size={70} />
        </span>
      </div>

      <a
        className="large-rel-artist-card__link"
        href={artist.spotify}
      >
        <span className="large-rel-artist-card__name">
          {artist.name}
        </span>
      </a>
    </li>
  );
};
