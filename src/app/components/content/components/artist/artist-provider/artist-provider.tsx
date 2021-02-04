import React, { useState } from 'react';
import artistFixture from '../../../../../../api/artistFixture.json';
import {
  IMainArtist,
  ITab,
  IAlbum
} from '../../../../../../helpers/interfaces';
import optionsFixture from '../../../../../../api/optionsFixture.json';
import albumFixture from '../../../../../../api/albumFixture.json';

const artist = artistFixture.artist;
const album = albumFixture.album;
const { defaultTabs } = optionsFixture;
const tabsList = optionsFixture.options;

type DefaultTabs = boolean;
type TabsListType = ITab[];
export type onChangeType = (tab: ITab) => void;

export interface IArtistContext {
  artist: IMainArtist;
  tabsList: TabsListType;
  album: IAlbum;
  defaultTabs: DefaultTabs;
  currentTab: ITab;
  onChange: onChangeType | null;
}

export const ArtistContext = React.createContext<IArtistContext>({
  artist,
  tabsList,
  album,
  defaultTabs,
  currentTab: {
    value: '',
    label: ''
  },
  onChange: null
});

export const ArtistProvider: React.FC = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<ITab>(tabsList[0]);

  const onChange = (tab: ITab): void => {
    setCurrentTab(tab);
  };

  const contextValue = {
    artist,
    tabsList,
    album,
    defaultTabs,
    currentTab,
    onChange
  };

  return (
    <ArtistContext.Provider value={contextValue}>
      {children}
    </ArtistContext.Provider>
  );
};