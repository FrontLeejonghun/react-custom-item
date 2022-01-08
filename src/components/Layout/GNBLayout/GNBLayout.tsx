import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { TopHeader } from 'components';

import styles from './GNBLayout.module.scss';

const cx = classNames.bind(styles);

interface GNBLayoutProps {
  children: ReactNode;
}

export const GNBLayout: React.FC<GNBLayoutProps> = ({ children }) => {
  return (
    <>
      <TopHeader />
      <div className={cx('wrap')}>{children}</div>
    </>
  );
};
