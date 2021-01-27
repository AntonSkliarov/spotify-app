import React, { useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import './app.sass';
import { CurrentTrack } from './components/current-track';
import { useWindowSize } from '../helpers/_custom-hooks';

export const App: React.FC = () => {
  const totalHeight = useWindowSize();

  useEffect((): void => {
    const handleResize = (): void => {
      const headerEl = document.querySelector('.header');
      const headerHeight = headerEl?.getBoundingClientRect().height;

      const footerEl = document.querySelector('.current-track');
      const footerHeight = footerEl?.getBoundingClientRect().height;

      const newPlaylistEl = document.querySelector('.new-playlist');
      const newPlaylistHeight = newPlaylistEl?.getBoundingClientRect().height;

      const playingEl = document.querySelector('.playing');
      const playingHeight = playingEl?.getBoundingClientRect().height;

      let navigationHeight = 0;
      if (headerHeight !== undefined
        && footerHeight !== undefined
        && newPlaylistHeight !== undefined
        && playingHeight !== undefined
      ) {
        navigationHeight = totalHeight - (headerHeight + footerHeight + newPlaylistHeight + playingHeight);
      }

      let artistHeight = 0;
      if (headerHeight !== undefined && footerHeight !== undefined) {
        artistHeight = totalHeight - (headerHeight + footerHeight);
      }

      const navigationEl = document.querySelector<HTMLElement>('.navigation');
      if (navigationEl !== null) {
        navigationEl.style.height = `${navigationHeight}px`;
        console.log('nav height: ', navigationEl.style.height);
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

