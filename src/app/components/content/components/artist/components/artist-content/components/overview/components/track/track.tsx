import React from 'react';
import './track.sass';

type TrackType = 'popular' | 'albums';

export interface ITrackProps {
  type: TrackType;
}

export const Track: React.FC<ITrackProps> = ({ type }) => {
  switch (type) {
    case 'popular':
      return (
        <div className="track track__latest-release">
          <div className="track__image-container">
            <img
              className="track__image"
              src=""
              alt=""
            />
          </div>

          <div className="track__details">
            <div className="track__title"></div>
            <div className="track__date">
              <span></span>
            </div>
          </div>
        </div>
      );
  };

  return (
    <div>Track</div>
  );
};