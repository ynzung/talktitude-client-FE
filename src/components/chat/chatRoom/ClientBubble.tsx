import React from 'react';

const ClientBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[70%] px-4 py-1.5 rounded-[20px] flex justify-between text-base font-medium break-words shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] bg-mainColor text-white self-end rounded-br-none">
      {children}
    </div>
  );
};

export default ClientBubble;
