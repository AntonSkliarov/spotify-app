import React, { useContext } from 'react';
import { ArtistContext, IArtistContext } from '../../../../../../../../artist-provider';
import './popular.sass';
import { IPopularTracks } from '../../../../../../../../../../../../../helpers/interfaces';
import { Track } from '../../../track';

export const Popular: React.FC = () => {
  const { artist } = useContext<IArtistContext>(ArtistContext);
  const { popularTracks } = artist;

  return (
    <div className="popular">
      <h3 className="popular__title">
        Popular
      </h3>

      <ol className="popular__tracks">
        {popularTracks.map((track: IPopularTracks, index: number) => (
          <Track
            type={"popular"}
            key={track.id}
            track={track}
            index={index}
          />
        ))}
      </ol>

      <button>Show 5 more</button>
    </div>
  );
};