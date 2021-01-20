import React, { useEffect, useRef } from 'react';
import noUiSlider from 'nouislider';
import './song-progress.sass';
import 'nouislider/distribute/nouislider.css';


export const SongProgress: React.FC = () => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    if (elRef.current !== null) {
      noUiSlider.create(elRef.current, {
        connect: [true, false],
        start: [20],
        range: {
          'min': [0],
          'max': [100]
        }
      });
    }
  }, []);

  return (
    <div ref={elRef} className="song-progress"></div>
  );
};