import React from 'react';
import './artist.sass';
import { ArtistHeader } from './components/artist-header';

export const Artist: React.FC = () => (
  <div className="artist">
    <ArtistHeader />
    Artist Content
  </div>
);
