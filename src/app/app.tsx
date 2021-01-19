import React from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import './app.sass';
import { CurrentTrack } from './components/current-track';

export const App: React.FC = () => (
    <>
      <Header />
      <Content />
      <CurrentTrack />
    </>
);

