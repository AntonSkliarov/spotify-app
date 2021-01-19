import React from 'react';
import { Navigation } from './components/navigation';
import { NewPlaylist } from './components/new-playlist';
import { Playing } from './components/playing';
import './sidebar.sass';

export const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <Navigation />
    <NewPlaylist />
    <Playing />
  </aside>
);
