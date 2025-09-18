import React from 'react';

const AgentBubble = ({ children }: { children: React.ReactNode }) => {
  const noMessage = children === null;
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
          className={`max-w-[70%] px-4 py-1.5 rounded-[20px] flex justify-between text-base font-medium break-words shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] 
        bg-white text-textBlack self-start rounded-bl-none`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default AgentBubble;
