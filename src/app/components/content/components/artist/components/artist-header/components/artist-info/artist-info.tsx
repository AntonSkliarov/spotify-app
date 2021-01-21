import React from 'react';
import './artist-info.sass';
import { ArtistImage } from './components/artist-image';

export const ArtistInfo: React.FC = () => (
  <div className="artist-info">
    <ArtistImage />
    <div>artist meta</div>
  </div>
);