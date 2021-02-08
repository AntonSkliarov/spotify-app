import React, { useContext } from 'react';
import classNames from 'classnames';
import './tab-item.sass';
import { ITab } from '@helpers/interfaces';
import {
  IArtistContext,
  ArtistContext
} from '@artistProvider';

interface ITabItemProps {
  tab: ITab;
  currentTab: ITab | null;
}

export const TabItem: React.FC<ITabItemProps> = ({ tab, currentTab }) => {
  const { onChange } = useContext<IArtistContext>(ArtistContext);
  const classes = classNames('tab-item', {
    'tab-item_active': (currentTab !== null) && (currentTab.value === tab.value),
  });
  
  const handleSelectTab = (tab: ITab) => {
    if (onChange !== null) {
      return onChange(tab);
    }
  };

  return (
    <li className={classes}
      onClick={() => handleSelectTab(tab)}
    >

      {tab.label}
    </li>
  );
};