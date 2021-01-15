import React from 'react';
import './header.sass';
import { PageFlows } from './components/page-flows';
import { Search } from './components/search';

export const Header = () => (
  <section className="header">
    <PageFlows />
    <Search />
    <div className="user"></div>
  </section>
);
