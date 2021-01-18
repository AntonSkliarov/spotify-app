import React from 'react';
import { NavList } from './components/nav-list';
import './navigation.sass';
import userFixture from '../../../../../../../api/userFixture.json';

const { user } = userFixture;

export const Navigation: React.FC = () => (
  <section className="navigation">

    <NavList
      title={"main"}
      user={user}
    />

    <NavList
      title={"your music"}
      user={user}
    />

    <NavList
      title={"playlists"}
      user={user}
    />
  </section>
);