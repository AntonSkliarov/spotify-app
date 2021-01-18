import React from 'react';
import { NavList } from './components/nav-list';
import './navigation.sass';
import userFixture from '../../../../../../../api/userFixture.json';

export const Navigation: React.FC = () => (
  <section className="navigation">
    {console.log(userFixture)}
    <NavList title={"main"}/>
    <NavList title={"your music"}/>
    <NavList title={"playlists"}/>
  </section>
);