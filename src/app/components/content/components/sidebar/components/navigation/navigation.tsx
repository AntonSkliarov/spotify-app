import React from 'react';
import { NavMenu } from './components/nav-menu';
import './navigation.sass';
import userFixture from '@api/userFixture.json';

const { user } = userFixture;

export const Navigation: React.FC = () => {
  return (
    <section className="navigation">

      <NavMenu
        title={"main"}
        list={user.main}
      />

      <NavMenu
        title={"your music"}
        list={user['your music']}
      />

      <NavMenu
        title={"playlists"}
        list={user.playlists}
      />
    </section>
  );
};