import React from 'react';

interface ButtonPropTypes {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({
  disabled,
  onClick,
  children,
}: ButtonPropTypes) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        flex w-full h-13 py-3.5
        justify-center items-center 
        rounded-[1.25rem] text-lg font-bold
        ${disabled ? 'bg-textLightGrey cursor-not-allowed' : 'bg-mainColor cursor-pointer'}
        text-white
      `}
    >
      {children}
    </button>
  );
}
