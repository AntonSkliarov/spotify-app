import React from 'react';
import './artist-info.sass';
import { ArtistImage } from './components/artist-image';
import { ArtistMeta } from './components/artist-meta';

export const ArtistInfo: React.FC = () => (
  <div className="artist-info">
    <ArtistImage />
    <ArtistMeta />
  </div>
);