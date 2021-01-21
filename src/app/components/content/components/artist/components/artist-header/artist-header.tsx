import React from 'react';
import './artist-header.sass';
import { ArtistInfo } from './components/artist-info';

export const ArtistHeader: React.FC = () => (
  <div className="artist-header">
    <ArtistInfo />
    <div>Artist listeners</div>
    <div>Artist navigation?</div>
  </div>
);
