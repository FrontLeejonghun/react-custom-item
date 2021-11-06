import classNames from 'classnames/bind';
import styles from './TopHeader.module.scss';

const cx = classNames.bind(styles);
export const TopHeader = () => {
  return (
    <header className={cx('top-header')}>
      <ul className={cx('terminal-icon')}>
        <li className={cx(['icon', 'red'])} />
        <li className={cx(['icon', 'yellow'])} />
        <li className={cx(['icon', 'green'])} />
      </ul>
      <div className={cx('terminal-content')}>
        <img src="/image/home-icon.svg" alt="" width={20} height={20} />
        <span className={cx('terminal-name')}>LJH ㅡ bash ㅡ2021</span>
      </div>
    </header>
  );
};
