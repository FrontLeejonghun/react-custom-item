import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { TopHeader } from 'components';

import styles from './GNBLayout.module.scss';

const cx = classNames.bind(styles);

interface GNBLayoutProps {
  children: ReactNode;
}

export const GNBLayout: React.FC<GNBLayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <TopHeader />
      {children}
      {router.pathname !== '/' && (
        <span onClick={() => router.push('/')} className={cx('main-link')}>
          메인페이지로 돌아가기
        </span>
      )}
    </>
  );
};
