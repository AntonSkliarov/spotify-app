import React from 'react';
import artistFixture from '../../../../../../api/artistFixture.json';
import { IMainArtist, IOptions } from '../../../../../../helpers/interfaces';
import options from '../../../../../../options/options.json';

const artist = artistFixture.artist;

export interface IArtistContext {
  artist: IMainArtist;
  options: IOptions;
}


export const ArtistContext = React.createContext<IArtistContext>({
  artist,
  options});

export const ArtistProvider: React.FC = ({ children }) => {

  const contextValue = {
    artist,
    options,
  };

  return (
    <ArtistContext.Provider value={contextValue}>
      {children}
    </ArtistContext.Provider>
  );
};