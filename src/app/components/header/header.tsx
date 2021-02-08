import React from 'react';
import './header.sass';
import { PageFlows } from './components/page-flows';
import { Search } from './components/search';
import { User } from './components/user';

export const Header: React.FC = () => (
  <section className="header">
    <div className="header__page-flows">
      <PageFlows />
    </div>

    <div className="header__search">
      <Search />
    </div>


    <User />
  </section>
);
