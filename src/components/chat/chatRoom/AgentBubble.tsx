import React from 'react';

const AgentBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`max-w-[70%] px-4 py-1.5 rounded-[20px] flex justify-between text-base font-medium break-words shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] 
        bg-white text-textBlack self-start rounded-bl-none`}
    >
      {children}
    </div>
  );
};

export default AgentBubble;
