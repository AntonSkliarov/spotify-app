import React from 'react';
import { Navigation } from './components/navigation';
import './sidebar.sass';

export const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <Navigation />
    <section>New Playlist</section>
    <section>Playing</section>
  </aside>
);
