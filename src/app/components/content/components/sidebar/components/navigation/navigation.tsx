import React from 'react';
import { NavMenu } from './components/nav-menu';
import './navigation.sass';
import userFixture from '../../../../../../../api/userFixture.json';

const { user } = userFixture;

export const Navigation: React.FC = () => (
  <section className="navigation">

    <NavMenu
      title={"main"}
      user={user}
    />

    <NavMenu
      title={"your music"}
      user={user}
    />

    <NavMenu
      title={"playlists"}
      user={user}
    />
  </section>
);