import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './TopHeader.module.scss';

const cx = classNames.bind(styles);
export const TopHeader = () => {
  const router = useRouter();

  return (
    <header className={cx('top-header')}>
      <span onClick={() => router.push('/')}>React-C&H</span>
      {router.pathname !== '/' && (
        <span className={cx('router-back')} onClick={router.back}>
          이전 페이지로 돌아가기
        </span>
      )}
    </header>
  );
};
