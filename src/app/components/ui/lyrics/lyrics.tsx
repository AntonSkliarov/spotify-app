import React, { useState } from 'react';
import classNames from 'classnames';
import './lyrics.sass';

export const Lyrics: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = classNames(`lyrics`, {
    'lyrics_active': isActive,
  });

  const onClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <a
      className={classes}
      href="/#"
      onClick={onClick}
    >
      Lyrics
    </a>
  );
};
