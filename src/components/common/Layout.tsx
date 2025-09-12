'use client';

import { ReactNode, useEffect } from 'react';

export type LayoutProps = {
  children: ReactNode;
  padding?: string;
  center?: boolean;
  gap?: string;
  scrollToTop?: boolean;
};

export default function Layout({
  children,
  padding = 'pt-0 pb-0',
  center = false,
  gap = 'gap-0',
  scrollToTop = false,
}: LayoutProps) {
  useEffect(() => {
    if (scrollToTop) window.scrollTo(0, 0);
  }, [scrollToTop]);

  const baseClass = `w-full max-w-[600px] min-h-[100dvh] ${padding}`;
  const centerClass = center
    ? `flex flex-col justify-center items-center ${gap}`
    : '';

  return <div className={`${baseClass} ${centerClass}`}>{children}</div>;
}
