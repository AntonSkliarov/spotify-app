import React from 'react';
import { Sidebar } from './components/sidebar';
import './content.sass';

export const Content: React.FC = () => (
  <section className="content">
    <Sidebar />
    <div>Artist</div>
    <div>Social</div>
  </section>
);
