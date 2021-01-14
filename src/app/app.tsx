import React from 'react';
import { Header } from './components/header';
import './app.sass';

export function App() {
  return (
    <>
      <Header />
      <section className="content">Content</section>
      <section className="current-track">Bottom bar</section>
    </>
  );
}
