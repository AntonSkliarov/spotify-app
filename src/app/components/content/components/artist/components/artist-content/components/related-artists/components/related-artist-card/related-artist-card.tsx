import React from 'react';
import classNames from 'classnames';
import './related-artist-card.sass';
import { IRelatedArtists } from '../../../../../../../../../../../helpers/interfaces';

type RelatedArtistsCardType = 'small' | 'large';

export interface IRelatedArtistCardProps {
  artist: IRelatedArtists;
  type: RelatedArtistsCardType;
}

export const RelatedArtistCard: React.FC<IRelatedArtistCardProps> = ({
  artist,
  type
}) => {
  switch (type) {
    case 'small':
      return (
        <li
          className={classNames('related-artist-card', {
            'related-artist-card_small': type === 'small',
          })}
        >
          <a className="related-artist-card__link" href={artist.spotify}>
            <span>
              <img
                className="related-artist-card__image"
                src={artist.image}
                alt={artist.name}
              />
            </span>

            <span className="related-artist-card__name">
              {artist.name}
            </span>

          </a>
        </li>
      );
    case 'large':
      return null;
  }
};
