import React from 'react';
import './header.sass';
import { PageFlows } from './components/page-flows';
import { Search } from './components/search';
import { User } from './components/user';

export const Header: React.FC = () => (
  <section className="header">
    <PageFlows />
    <Search />
    <User />
  </section>
);
