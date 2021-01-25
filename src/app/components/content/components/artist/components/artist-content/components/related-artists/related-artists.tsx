import React, { useContext } from 'react';
import { ArtistContext, IArtistContext } from '../../../../artist-provider';
import './related-artists.sass';
import { IRelatedArtists } from '../../../../../../../../../helpers/interfaces';
import { RelatedArtistCard } from './components/related-artist-card';

type RelatedArtistsType = 'small' | 'large';

export interface IRelatedArtistsProps {
  type: RelatedArtistsType;
}

export const RelatedArtists: React.FC<IRelatedArtistsProps> = ({ type }) => {
  const { artist } = useContext<IArtistContext>(ArtistContext);
  const { relatedArtists } = artist;

  return (
    <div className="related-artists">
      <h3 className="related-artists__title">Related Artists</h3>

      <ul className="related-artists__list">
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