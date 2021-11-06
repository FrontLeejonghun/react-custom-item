import classNames from 'classnames/bind';
import { useScroll } from 'hooks';
import styles from './UseScrollPage.module.scss';

const cx = classNames.bind(styles);

export const UseScrollPage = () => {
  const scrollLockStatus = useScroll();

  const scrollLock = (type: string) => {
    scrollLockStatus({ type: type, state: true });
    setTimeout(() => {
      scrollLockStatus({ type: type, state: false });
    }, 5000);
  };
  return (
    <div className={cx('wrap')}>
      <button onClick={() => scrollLock('overflow')}>오버플로우 스크롤락</button>
      <button onClick={() => scrollLock('touch')}>모바일 터치 스크롤락</button>
      <span className={cx('description')}>
        버튼을 누르시면, 누르신 순간 스크롤락이 되고, 5초뒤에 해제 됩니다. touch는 모바일에서만
        작동합니다.
      </span>
    </div>
  );
};
