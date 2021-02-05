import React from 'react';
import './related-artist-card.sass';
import { IRelatedArtists } from '@helpers/interfaces';
import { SmallRelArtistCard } from './components/small-rel-artist-card';
import { LargeRelArtistCard } from './components/large-rel-artist-card';

type RelatedArtistsCardType = 'small' | 'large';

export interface IRelatedArtistCardProps {
  artist: IRelatedArtists;
  type: RelatedArtistsCardType;
}

export const RelatedArtistCard: React.FC<IRelatedArtistCardProps> = ({
  artist,
  type
}) => {

  return (
    <>
      {type === 'large' && <LargeRelArtistCard artist={artist} />}
      {type === 'small' && <SmallRelArtistCard artist={artist} />}
    </>
  );
};
