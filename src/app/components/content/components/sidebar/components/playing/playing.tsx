import React from 'react';
import './playing.sass';
import currentTrack from '../../../../../../../api/currentTrack.json';
import { ITrack } from '../../../../../../../helpers/interfaces';
import { AddToFavButton } from '../../../../../ui/add-to-fav-button';


const track: ITrack = currentTrack.track;

export const Playing: React.FC = () => (
  <section className="playing">

    <div className="playing__image-container">
      <img src={track.album.image} alt="Album Art"/>
    </div>

    <div className="playing__track">
      <a className="playing__track-name" href={track.album.spotify}>
        {track.name}
      </a>

      <a className="playing__track-artist" href={track.artist.spotify}>
        {track.artist.name}
      </a>
    </div>

    <AddToFavButton />
  </section>
);
