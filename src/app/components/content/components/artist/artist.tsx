import React from 'react';
import './artist.sass';
import { ArtistHeader } from './components/artist-header';
import artistFixture from '../../../../../api/artistFixture.json';
import { IMainArtist } from '../../../../../helpers/interfaces';
// import { ArtistProvider } from './artist-provider';

const artist: IMainArtist = artistFixture.artist;
export const ArtistContext = React.createContext(artist);

export const Artist: React.FC = () => (
  <ArtistContext.Provider value={artist}>

    <div className="artist">
      <ArtistHeader />
      Artist Content
    </div>

  </ArtistContext.Provider>
);
