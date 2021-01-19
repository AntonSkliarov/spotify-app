import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import './new-playlist.sass';

export const NewPlaylist: React.FC = () => (
  <section className="new-playlist">
    <a className="new-playlist__link" href="#">

      <span className="new-playlist__icon">
        <IoAddCircleOutline size={25}/>
      </span>

      <span className="new-playlist__text">
        New Playlist
      </span>
    </a>
  </section>
);
