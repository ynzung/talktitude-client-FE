import React from 'react';

const ClientBubble = ({ children }: { children: React.ReactNode }) => {
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
          className={`max-w-[70%] px-4 py-1.5 rounded-[20px] flex justify-between text-base font-medium break-words shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] ${
            noMessage ? 'bg-gray-100 text-gray-500' : 'bg-mainColor text-white'
          } self-end rounded-br-none`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default ClientBubble;
