import React from 'react';
import { RelatedArtists } from '../related-artists';
import { ArtistAlbums } from './components/artist-albums';
import { ArtistSongs } from './components/artist-songs';

import './overview.sass';

export const Overview: React.FC = () => {
  return (
    <div className="overview">
      <ArtistSongs />
      <RelatedArtists type={"small"}/>
      <ArtistAlbums />
    </div>
  );
};
