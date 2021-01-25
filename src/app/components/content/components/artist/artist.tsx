import React from 'react';
import './artist.sass';
import { ArtistHeader } from './components/artist-header';
import { ArtistProvider } from './artist-provider';

export const Artist: React.FC = () => (
  <ArtistProvider>

    <div className="artist">
      <ArtistHeader />
      Artist Content
    </div>

  </ArtistProvider>
);
