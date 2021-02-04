import React, { useState } from 'react';
import { ViewType } from '@ui/view-type';
import './artist-albums.sass';
import { ArtistAlbum } from './components/artist-album';

export const ArtistAlbums: React.FC = () => {
  const [viewFilter, setViewFilter] = useState<string>('list');

  const handleFilter = (type: string): void => {
    setViewFilter(type);
  };

  return (
    <div className="artist-albums">
      <div className="artist-albums__header">

        <h3 className="artist-albums__title">Albums</h3>

        <div className="artist-albums__view-type">
          <ViewType
            type={"list"}
            viewFilter={viewFilter}
            onClick={handleFilter}
          />

          <ViewType
            type={"cards"}
            viewFilter={viewFilter}
            onClick={handleFilter}
          />
        </div>

      </div>

      <ArtistAlbum />
    </div>
  );
};
