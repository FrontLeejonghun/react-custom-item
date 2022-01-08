import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { onScreenObserver } from 'utils';
import styles from './OnScreenObserver.module.scss';

const cx = classNames.bind(styles);

export const OnScreenObserver = () => {
  const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

  useEffect(() => {
    const payload = {
      lastEl: document.querySelector('.footer'), // must be Element
      options: {}, //optional
    };

    const eventEmitterInstance = onScreenObserver(payload);
    eventEmitterInstance.on('onScreen', (entries: IntersectionObserverEntry) => {
      if (entries.isIntersecting) {
        setArray((array) => [...array, ...tempArray]);
      }
    });
  }, []);

  return (
    <div className={cx('wrap')}>
      {array.map((v, index) => {
        return (
          <div key={v} className={cx(['card', `card-${v}`])}>
            {index}
          </div>
        );
      })}
      <div className={cx('footer')}>마지막 요소인걸 알게해주는 컨텐츠입니다.</div>
    </div>
  );
};
