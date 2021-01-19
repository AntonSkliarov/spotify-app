import React from 'react';
import { Navigation } from './components/navigation';
import { NewPlaylist } from './components/new-playlist';
import './sidebar.sass';

export const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <Navigation />
    <NewPlaylist />
    <section>Playing</section>
  </aside>
);
