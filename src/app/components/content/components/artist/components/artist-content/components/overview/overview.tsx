import React from 'react';
import { ArtistSongs } from './components/artist-songs';
import './overview.sass';

export const Overview: React.FC = () => {
  return (
    <div className="overview">
      <ArtistSongs />
      <div>Related</div>
      <div>Artist albums</div>
    </div>
  );
};
