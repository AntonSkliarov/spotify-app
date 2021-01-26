import React, { useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import './app.sass';
import { CurrentTrack } from './components/current-track';

export const App: React.FC = () => {


  useEffect((): void => {
    const totalHeight = window.innerHeight;
    console.log(totalHeight);

    const headerEl = document.querySelector('.header');
    const headerHeight = headerEl?.getBoundingClientRect().height;

    const footerEl = document.querySelector('.current-track');
    const footerHeight = footerEl?.getBoundingClientRect().height;
    console.log(headerHeight, footerHeight);

    const newPlaylistEl = document.querySelector('.new-playlist');
    const newPlaylistHeight = newPlaylistEl?.getBoundingClientRect().height;
    console.log(newPlaylistHeight);

    const playingEl = document.querySelector('.playing');
    const playingHeight = playingEl?.getBoundingClientRect().height;
    console.log(playingHeight);

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
    
    console.log('nav Height: ', navigationHeight);
    console.log('artist Height: ', artistHeight);

    const navigationEl = document.querySelector('.navigation');
    // navigationEl.style.height = 
    console.log(navigationEl);
  }, []);

  return (
    <>
      <Header />
      <Content />
      <CurrentTrack />
    </>
  );
};

