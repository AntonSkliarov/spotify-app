import React, { useContext, useState } from 'react';
import { ArtistContext, IArtistContext } from '../../../../../../../../artist-provider';
import './popular.sass';
import { IPopularTracks } from '../../../../../../../../../../../../../helpers/interfaces';
import { Track } from '../../../track';
import { ActionButton } from '@ui/action-button';

export const Popular: React.FC = () => {
  const [visibleFullList, setVisibleFullList] = useState<boolean>(false);
  const { artist } = useContext<IArtistContext>(ArtistContext);
  const { popularTracks } = artist;

  const handleShowFullList = (): void => {
    setVisibleFullList(!visibleFullList);
  };

  const filteredTracks = popularTracks.filter((track: IPopularTracks, index: number) => {
    return visibleFullList ? index < 10 : index < 5 ;
  });

  return (
    <div className="popular">
      <h3 className="popular__title">
        Popular
      </h3>

      <ul className="popular__tracks">
        {filteredTracks.map((track: IPopularTracks, index: number) => (
          <Track
            type={"popular"}
            key={track.id}
            track={track}
            index={index}
          />
        ))}
      </ul>

      <ActionButton
        type={"5 more"}
        onClick={handleShowFullList}
        visibleFullList={visibleFullList}
      />
    </div>
  );
};