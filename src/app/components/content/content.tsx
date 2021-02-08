import React from 'react';
import { Artist } from './components/artist';
import { Sidebar } from './components/sidebar';
import { Social } from './components/social';
import './content.sass';

export const Content: React.FC = () => (
  <section className="content">
    <Sidebar />
    <Artist />
    <Social />
  </section>
);
