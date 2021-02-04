import React from 'react';
import CSS from 'csstype';
import './related-artist-card.sass';
import { IRelatedArtists } from '@helpers/interfaces';
import { IoIosPlay } from 'react-icons/io';

type RelatedArtistsCardType = 'small' | 'large';

export interface IRelatedArtistCardProps {
  artist: IRelatedArtists;
  type: RelatedArtistsCardType;
}

export const RelatedArtistCard: React.FC<IRelatedArtistCardProps> = ({
  artist,
  type
}) => {
  const imgStyles: CSS.Properties = {
    backgroundImage: `url(${artist.image})`
  };

  switch (type) {
    case 'small':
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

    case 'large':
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

    default:
      return null;
  }
};
