import React, { useContext } from 'react';
import { TabItem } from './components/tab-item';
import './tabs.sass';
import { ArtistContext, IArtistContext } from '../../content/components/artist/artist-provider';
import { ITab } from '../../../../helpers/interfaces';
import { FUNC } from '../../../../helpers/_functions';

export const Tabs: React.FC = () => {
  const {
    tabsList,
    currentTab
  } = useContext<IArtistContext>(ArtistContext);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabsList.map((tab: ITab) => (
          <TabItem
            key={tab.value}
            tab={tab}
            currentTab={currentTab}
          />
        ))}
      </ul>

      <span className="tabs__highlighter"
        style={FUNC.calcHighlighterStyle(tabsList, currentTab)}
      />
    </div>
  );
};
