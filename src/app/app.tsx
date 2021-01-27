import React, { useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import './app.sass';
import { CurrentTrack } from './components/current-track';
import { useWindowSize } from '../helpers/_custom-hooks';
import { FUNC } from '../helpers/_functions';

export const App: React.FC = () => {
  const totalHeight = useWindowSize();

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

      const navigationEl = document.querySelector<HTMLElement>('.navigation');

      if (navigationEl !== null) {
        navigationEl.style.height = `${navigationHeight}px`;
      }

      const artistEl = document.querySelector<HTMLElement>('.artist');

      if (artistEl !== null) {
        artistEl.style.height = `${artistHeight}px`;
      }

      const socialEl = document.querySelector<HTMLElement>('.social');

      if (socialEl !== null) {
        socialEl.style.height = `${artistHeight}px`;
      }
    };

    handleResize();
  }, [totalHeight]);

  return (
    <>
      <Header />
      <Content />
      <CurrentTrack />
    </>
  );
};

