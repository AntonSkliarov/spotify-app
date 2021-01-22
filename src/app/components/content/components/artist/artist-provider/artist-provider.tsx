import React from 'react';
import artistFixture from '../../../../../../api/artistFixture.json';
import { IMainArtist } from '../../../../../../helpers/interfaces';

const artist: IMainArtist = artistFixture.artist;

export const ArtistContext = React.createContext(artist);

export const ArtistProvider: React.FC = ({ children }) => {

  const contextValue = {
    artist,
  };

  return (
    <ArtistContext.Provider value={contextValue}>
      {children}
    </ArtistContext.Provider>
  );
};