import React, { useContext } from 'react';
import classNames from 'classnames';
import { ArtistContext, IArtistContext } from '@artistProvider';
import './related-artists.sass';
import { IRelatedArtists } from '@helpers/interfaces';
import { RelatedArtistCard } from './components/related-artist-card';

type RelatedArtistsType = 'small' | 'large';

export interface IRelatedArtistsProps {
  type: RelatedArtistsType;
}

export const RelatedArtists: React.FC<IRelatedArtistsProps> = ({ type }) => {
  const { artist } = useContext<IArtistContext>(ArtistContext);
  const { relatedArtists } = artist;

  const classes = {
    relArtists: classNames("related-artists", {
      "related-artists_small": type === 'small',
      "related-artists_large": type === 'large',
    }),
    relArtistsList: classNames("related-artists__list", {
      "related-artists__list_small": type === 'small',
      "related-artists__list_large": type === 'large',
    })
  };

  return (
    <div
      className={classes.relArtists}
    >
      {type === 'small'
        && <h3 className="related-artists__title">Related Artists</h3>
      }

      <ul className={classes.relArtistsList}>
        {relatedArtists.map((artist: IRelatedArtists) => (
          <RelatedArtistCard
            key={artist.id}
            artist={artist}
            type={type}
          />
        ))}

      </ul>
    </div>
  );
};