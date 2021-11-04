import { useCallback, useLayoutEffect, useState } from 'react';

export const useScrollLock = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);

  const scrollLock = useCallback(() => setScrollState(true), []);
  const scrollAllow = useCallback(() => setScrollState(false), []);

  useLayoutEffect(() => {
    scrollState
      ? (document.body.style.overflow = 'hidden')
      : document.body.style.removeProperty('overflow');
  }, [scrollState]);

  return { scrollLock, scrollAllow };
};
