import { useEffect, useState } from 'react';

export const useWindowHeight = (): number => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect((): void => {
    const handleSetHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleSetHeight);
  }, []);

  return windowHeight;
};

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect((): void => {
    const handleSetHeight = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleSetHeight);
  }, []);

  return windowWidth;
};