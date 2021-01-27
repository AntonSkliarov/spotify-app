import { useEffect, useState } from 'react';

export const useWindowSize = (): number => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect((): void => {
    const handleSetHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleSetHeight);
  }, []);

  return windowHeight;
};
