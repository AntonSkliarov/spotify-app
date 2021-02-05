import React, { useState } from 'react';
import classNames from 'classnames';
import './lyrics.sass';

export const Lyrics: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <a
      className={classNames(`lyrics`, {
        'lyrics_active': isActive,
      })}
      href="/"
      onClick={onClick}
    >
      Lyrics
    </a>
  );
};
