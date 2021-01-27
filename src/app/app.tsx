import React, { useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import './app.sass';
import { CurrentTrack } from './components/current-track';
import { useWindowHeight, useWindowWidth } from '../helpers/_custom-hooks';
import { FUNC } from '../helpers/_functions';

export const App: React.FC = () => {
  const totalHeight = useWindowHeight();
  const totalWidth = useWindowWidth();

  useEffect((): void => {
    const handleResize = (): void => {
      type HeightType = number;

      const headerHeight: HeightType = FUNC.getElementHeight('.header');
      const footerHeight: HeightType = FUNC.getElementHeight('.current-track');
      const newPlaylistHeight: HeightType = FUNC.getElementHeight('.new-playlist');
      const playingHeight: HeightType = FUNC.getElementHeight('.playing');

      const navigationHeight: HeightType = totalHeight - (headerHeight
        + footerHeight + newPlaylistHeight + playingHeight);

      const artistHeight: HeightType = totalHeight - (headerHeight + footerHeight);

      if (totalWidth <= 768) {
        FUNC.resizeElement('.navigation', 'auto');
      } else {
        FUNC.resizeElement('.navigation', navigationHeight);
      }

      FUNC.resizeElement('.artist', artistHeight);
      FUNC.resizeElement('.social', artistHeight);
    };

    handleResize();
  }, [totalHeight, totalWidth]);

  return (
    <>
      <Header />
      <Content />
      <CurrentTrack />
    </>
  );
};

