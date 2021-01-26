import React from 'react';
import './album-tracks.sass';
import { IAlbumTrack } from '../../../../../../../../../../../../../../../helpers/interfaces';
import { IoIosThumbsUp, IoMdStopwatch } from 'react-icons/io';
import { Track } from '../../../../../track';

interface IAlbumTracksProps {
  tracks: Array<IAlbumTrack>;
}

export const AlbumTracks: React.FC<IAlbumTracksProps> = ({ tracks }) => {
  console.log(tracks);
  return (
    <div className="album-tracks">
      <ul className="album-tracks__list">
        <div className="album-tracks__header">
          <div className="album-tracks__header-number">
            #
          </div>

          <div className="album-tracks__header-title">
            Song
          </div>

          <div className="album-tracks__header-duration">
            <IoMdStopwatch />
          </div>

          <div className="album-tracks__header-popularity">
            <IoIosThumbsUp />
          </div>
        </div>

        {tracks.map((track: IAlbumTrack, index: number) => (
          <Track
            key={track.id}
            track={track}
            type={"album"}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};
