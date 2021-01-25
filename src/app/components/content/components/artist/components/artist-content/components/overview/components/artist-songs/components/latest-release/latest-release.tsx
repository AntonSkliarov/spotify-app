import React, { useContext } from 'react';
import { ArtistContext, IArtistContext } from '../../../../../../../../artist-provider';
import './latest-release.sass';

export const LatestRelease: React.FC = () => {
  const { artist } = useContext<IArtistContext>(ArtistContext);
  const { latestRelease } = artist;

  return (
    <div className="latest-release">
      <h3 className="latest-release__title">
        Latest Release
      </h3>

      <div className="latest-release__track">
        <div className="latest-release__image-container">
          <img
            className="latest-release__image"
            src={latestRelease.albumImage}
            alt="Album Image"
          />
        </div>

        <div className="latest-release__track-details">
          <div className="latest-release__track-title">
            {latestRelease.title}
          </div>

          <div className="latest-release__track-date">
            <span>{latestRelease.date}</span>
          </div>
        </div>

      </div>
    </div>
  );
};