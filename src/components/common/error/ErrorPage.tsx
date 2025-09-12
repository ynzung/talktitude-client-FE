import React from 'react';
import Header from '../Header';

interface ErrorPageProps {
  title: string;
  message: string;
  subMessage?: string;
  actions: React.ReactNode;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  title,
  message,
  subMessage,
  actions,
}) => {
  const errorcode = Number(title);
  return (
    <div className="min-h-[100dvh] bg-white flex flex-col">
      {/* 헤더 (맨 위 고정) */}
      <Header />

      {/* 중앙 에러 메시지 */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1
          className={`${
            errorcode ? 'text-6xl' : 'text-2xl'
          } text-textLightGray font-bold mb-2`}
        >
          {title}
        </h1>
        <p className="text-[#C5C6CB] font-bold mb-4 whitespace-pre-line">
          {message}
        </p>
        {subMessage && (
          <p className="text-[#C5C6CB] font-semibold whitespace-pre-line">
            {subMessage}
          </p>
        )}
      </div>

      {/* 하단 액션 버튼 */}
      <div className="w-full max-w-[600px] mx-auto px-6 py-6 space-y-4">
        {actions}
      </div>
    </div>
  );
};

export default ErrorPage;
