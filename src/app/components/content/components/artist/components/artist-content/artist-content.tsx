import React from 'react';
import './artist-content.sass';
import { Overview } from './components/overview';

export const ArtistContent: React.FC = () => (
  <div className="artist-content">
    <Overview />
  </div>
);