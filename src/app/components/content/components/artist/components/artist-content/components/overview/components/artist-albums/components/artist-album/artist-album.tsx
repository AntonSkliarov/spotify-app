import React from 'react';
import './artist-album.sass';
import albumFixture from '@api/albumFixture.json';
import { ActionButton } from '@ui/action-button';
import { AlbumTracks } from './components/album-tracks';

const { album } = albumFixture;

export const ArtistAlbum: React.FC = () => {
  return (
    <div className="artist-album">
      <div className="artist-album__info">

        <div className="artist-album__image-container">
          <img
            className="artist-album__image"
            src={album.image}
            alt={album.name}
          />
        </div>

        <div className="artist-album__meta">
          <div className="artist-album__year">
            {album.releaseDate}
          </div>

          <div className="artist-album__name">
            {album.name}
          </div>

          <div className="artist-album__actions">
            <ActionButton type={"save"} />
            <ActionButton type={"more"} />
          </div>
        </div>
      </div>

      <AlbumTracks tracks={album.tracks}/>
    </div>
  );
};
