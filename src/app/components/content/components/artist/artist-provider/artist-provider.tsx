import React from 'react';
import artistFixture from '../../../../../../api/artistFixture.json';
import {
  IMainArtist,
  IOption,
  IAlbum
} from '../../../../../../helpers/interfaces';
import optionsFixture from '../../../../../../api/optionsFixture.json';
import albumFixture from '../../../../../../api/albumFixture.json';

const artist = artistFixture.artist;
const album = albumFixture.album;
const { options, defaultTabs } = optionsFixture;

type DefaultTabs = boolean;
type Options = Array<IOption>;

export interface IArtistContext {
  artist: IMainArtist;
  options: Options;
  album: IAlbum;
  defaultTabs: DefaultTabs;
}

export const ArtistContext = React.createContext<IArtistContext>({
  artist,
  options,
  album,
  defaultTabs
});

export const ArtistProvider: React.FC = ({ children }) => {
  const contextValue = {
    artist,
    options,
    album,
    defaultTabs
  };

  return (
    <ArtistContext.Provider value={contextValue}>
      {children}
    </ArtistContext.Provider>
  );
};