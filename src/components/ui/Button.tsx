import React from 'react';

interface ButtonPropTypes {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({
  disabled,
  onClick,
  children,
}: ButtonPropTypes) {
  return (
    <button
      aria-disabled={disabled}
      onClick={onClick}
      className={`
        flex w-full h-14 px-auto py-3.5 rounded-[20px] text-base font-bold 
        justify-center items-center 
        ${disabled ? 'bg-lineGray' : 'bg-mainColor cursor-pointer hover:bg-[#4A66C9]'}
        text-white 
      `}
    >
      {children}
    </button>
  );
}
