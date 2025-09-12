'use client';

import React from 'react';
import Logo from '@/components/common/Logo';
import LoadingSpinner from './LoadingSpinner';

interface LoadingPageProps {
  message?: string;
  showLogo?: boolean;
  className?: string;
}

const LoadingPage = ({
  message,
  showLogo = true,
  className = '',
}: LoadingPageProps) => {
  const containerClasses =
    'fixed inset-0 bg-white/60 z-50 flex flex-col items-center justify-center';

  return (
    <div className={`${containerClasses} ${className}`}>
      {showLogo && (
        <div className="mb-8">
          <Logo />
        </div>
      )}

      <div className="flex flex-col items-center space-y-4">
        <LoadingSpinner size="lg" color="primary" />
        {message && (
          <p className="text-textLightGray font-medium text-lg">{message}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;
