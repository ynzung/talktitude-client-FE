import React from 'react';
import { ChatMessagePropsType } from '@/types/chat';

interface ClientBubbleProps {
  children: React.ReactNode;
  message?: ChatMessagePropsType;
}

const ClientBubble = ({ children, message }: ClientBubbleProps) => {
  const noMessage = children === null;
  const getStatusStyle = () => {
    if (!message?.isTemporary) return '';

    switch (message.status) {
      case 'sending':
        return 'opacity-70';
      case 'failed':
        return 'opacity-50 bg-textRed';
      default:
        return '';
    }
  };

  const getStatusIcon = () => {
    if (!message?.isTemporary) return null;

    switch (message.status) {
      case 'sending':
        return (
          <div className="ml-2 flex items-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {noMessage ? (
        <div
          className={`max-w-[70%] px-4 py-1.5 rounded-[20px] flex justify-between text-base font-medium break-words shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] 
       bg-bgLightGray text-textLightGray self-start rounded-bl-none`}
        >
          메시지를 불러올 수 없습니다.
        </div>
      ) : (
        <div
          className={`max-w-[70%] px-4 py-1.5 rounded-[20px] flex justify-between text-base font-medium break-words shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ${
            noMessage ? 'bg-gray-100 text-gray-500' : 'bg-mainColor text-white'
          } self-end rounded-br-none ${getStatusStyle()}`}
        >
          <span>{children}</span>
          {getStatusIcon()}
        </div>
      )}
    </>
  );
};

export default ClientBubble;
