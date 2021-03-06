import React from 'react';
import './artist.sass';
import { ArtistHeader } from './components/artist-header';
import { ArtistProvider } from './artist-provider';
import { ArtistContent } from './components/artist-content';

export const Artist: React.FC = () => (
  <ArtistProvider>

    <div className="artist">
      <ArtistHeader />
      <ArtistContent />
    </div>

  </ArtistProvider>
);
