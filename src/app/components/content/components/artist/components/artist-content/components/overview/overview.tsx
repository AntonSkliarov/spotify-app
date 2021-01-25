import React from 'react';
import { RelatedArtists } from '../related-artists';
import { ArtistSongs } from './components/artist-songs';

import './overview.sass';

export const Overview: React.FC = () => {
  return (
    <div className="overview">
      <ArtistSongs />
      <RelatedArtists type={"small"}/>
      {/* <RelatedArtists type={"large"}/> */}
      {/* <div>Artist albums</div> */}
    </div>
  );
};
