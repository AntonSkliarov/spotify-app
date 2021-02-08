import React, { useRef, useEffect } from 'react';
import { ImVolumeHigh } from 'react-icons/im';
import noUiSlider from 'nouislider';
import './volume.sass';

export const Volume: React.FC = () => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    if (elRef.current && elRef) {
      noUiSlider.create(elRef.current, {
        connect: [true, false],
        start: [80],
        range: {
          'min': [0],
          'max': [100]
        }
      });
    }
  }, []);

  return (
    <div className="volume">
      <button className="volume__button">
        <ImVolumeHigh size={15}/>
      </button>

      <div ref={elRef} className="volume__slider"></div>
    </div>
  );
};
