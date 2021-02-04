import React, { useContext } from 'react';
import { ArtistContext, IArtistContext } from '@artistProvider';
import './artist-content.sass';
import { Overview } from './components/overview';
import { RelatedArtists } from './components/related-artists';

export const ArtistContent: React.FC = () => {
  const { currentTab } = useContext<IArtistContext>(ArtistContext);

  return (
    <div className="artist-content">
      {currentTab.value === 'Overview' && <Overview />}

      {currentTab.value === 'Related Artists' && (
        <RelatedArtists type={'large'}/>
      )}
    </div>
  );
};