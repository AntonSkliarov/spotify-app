import React from 'react';
import './artist-songs.sass';
import { LatestRelease } from './components/latest-release';
import { Popular } from './components/popular';

export const ArtistSongs: React.FC = () => (
  <div className="artist-songs">
    <LatestRelease />
    <Popular />
  </div>
);
