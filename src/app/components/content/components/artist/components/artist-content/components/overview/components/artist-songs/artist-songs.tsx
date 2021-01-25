import React from 'react';
import './artist-songs.sass';
import { LatestRelease } from './components/latest-release';

export const ArtistSongs: React.FC = () => (
  <div className="artist-songs">
    <LatestRelease />
    <div>Popular</div>
  </div>
);
