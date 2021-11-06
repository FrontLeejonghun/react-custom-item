import React, { ReactNode } from 'react';
import { TopHeader, BottomFooter } from 'components';

interface GNBLayoutProps {
  children: ReactNode;
}

export const GNBLayout: React.FC<GNBLayoutProps> = ({ children }) => {
  return (
    <>
      <TopHeader />
      {children}
      <BottomFooter />
    </>
  );
};
