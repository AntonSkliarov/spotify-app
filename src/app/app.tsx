import React from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import './app.sass';

export function App() {
  return (
    <>
      <Header />
      <Content />
      <section className="current-track">Bottom bar</section>
    </>
  );
}
