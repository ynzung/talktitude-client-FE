import React from 'react';

interface ChatBubbleProps {
  is_mine: boolean;
  children: React.ReactNode;
  isLastInGroup?: boolean;
}

export default function ChatBubble({
  is_mine,
  children,
  isLastInGroup = true,
}: ChatBubbleProps) {
  return (
    <div
      className={`max-w-[70%] px-4 py-1.5 rounded-[20px] flex justify-between text-base font-medium break-words shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ${
        is_mine
          ? 'bg-mainColor text-white self-end rounded-br-none'
          : 'bg-white text-textBlack self-start rounded-bl-none'
      } ${isLastInGroup ? 'mb-4' : 'mb-2.5'}`}
    >
      {children}
    </div>
  );
}
