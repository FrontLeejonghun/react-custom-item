import { useEffect, useState } from 'react';

export const useResize = () => {
  const [browserSize, setBrowserSize] = useState<number>(0);
  useEffect(() => {
    setBrowserSize(window.innerWidth);

    const onResize = () => setBrowserSize(window.innerWidth);

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { browserSize };
};
