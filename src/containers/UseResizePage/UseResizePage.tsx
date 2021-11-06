import classNames from 'classnames/bind';
import { useResize } from 'hooks';
import styles from './UseResizePage.module.scss';

const cx = classNames.bind(styles);

export const UseResizePage = () => {
  const browserSize = useResize();

  return <div className={cx('size')}>browser-width : {browserSize}px</div>;
};
