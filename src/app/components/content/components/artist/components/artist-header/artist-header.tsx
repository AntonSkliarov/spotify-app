import React from 'react';
import './artist-header.sass';
import { ArtistInfo } from './components/artist-info';
import { ArtistListeners } from './components/artist-listeners';

export const ArtistHeader: React.FC = () => (
  <div className="artist-header">
    <ArtistInfo />
    <ArtistListeners />
    <div>Artist navigation?</div>
  </div>
);
