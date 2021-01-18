import React from 'react';
import { Navigation } from './components/navigation';
import './sidebar-menu.sass';

export const SidebarMenu: React.FC = () => (
  <aside className="sidebar-menu">
    <Navigation />
    <section>New Playlist</section>
    <section>Playing</section>
  </aside>
);
