import React from 'react';

interface ButtonPropTypes {
  disabled: boolean;
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
        flex w-[22.4375rem] h-13 py-3.5
        justify-center items-center 
        rounded-[1.25rem] text-base font-semibold
        ${disabled ? 'bg-textLightGrey cursor-not-allowed' : 'bg-mainColor cursor-pointer'}
        text-white
      `}
    >
      {children}
    </button>
  );
}
