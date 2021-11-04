import { useCallback, useLayoutEffect, useState, useEffect } from 'react';

interface Options {
  type?: string;
  state: boolean;
}

export const useScroll = () => {
  const [overflowState, setOverflowState] = useState<boolean>(false);
  const [touchState, setTouchState] = useState<boolean>(false);

  const scrollLockStatus = useCallback((options: Options) => {
    if (options.type === 'overflow') {
      setOverflowState(options.state);
      return;
    }

    setTouchState(options.state);
  }, []);

  useLayoutEffect(() => {
    if (overflowState) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.removeProperty('overflow');
  }, [overflowState]);

  useEffect(() => {
    const touchEventPrevent = (event: TouchEvent) => !touchState || event.preventDefault();

    document.body.addEventListener('touchstart', touchEventPrevent, { passive: false });
    return () => document.body.removeEventListener('touchstart', touchEventPrevent);
  }, [touchState]);

  return scrollLockStatus;
};
