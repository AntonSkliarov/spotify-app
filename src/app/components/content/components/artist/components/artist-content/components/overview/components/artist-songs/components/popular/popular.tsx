import React, { useContext } from 'react';
import { ArtistContext, IArtistContext } from '../../../../../../../../artist-provider';
import './popular.sass';
import { IPopularTracks } from '../../../../../../../../../../../../../helpers/interfaces';
import { Track } from '../../../track';
import { ActionButton } from '../../../../../../../../../../../ui/action-button';

export const Popular: React.FC = () => {
  // const [visibleFullList, setVisibleFullList]
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

      <ActionButton type={"5 more"} />
    </div>
  );
};