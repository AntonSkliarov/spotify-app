import React from 'react';
import './artist-header.sass';
import { ArtistInfo } from './components/artist-info';
import { ArtistListeners } from './components/artist-listeners';
import { ArtistNavigation } from './components/artist-navigation';

export const ArtistHeader: React.FC = () => (
  <div className="artist-header">
    <ArtistInfo />
    <ArtistListeners />
    <ArtistNavigation />
  </div>
);
