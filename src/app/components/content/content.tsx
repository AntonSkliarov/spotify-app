import React from 'react';
import { SidebarMenu } from './components/sidebar-menu';
import './content.sass';

export const Content: React.FC = () => (
  <section className="content">
    <SidebarMenu />
    <div>Artist</div>
    <div>Social</div>
  </section>
);
