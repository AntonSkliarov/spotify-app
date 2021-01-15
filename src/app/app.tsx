import React from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import './app.sass';

export const App: React.FC = () => (
    <>
      <Header />
      <Content />
      <section className="current-track">Bottom bar</section>
    </>
);

