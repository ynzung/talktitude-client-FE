import React from 'react';
import WhiteLogo from '/public/logo/white-logo.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full max-w-[600px] h-14 bg-mainColor flex items-center justify-start px-[22px] fixed">
      <Image
        src={WhiteLogo}
        alt="Talktitude white Logo"
        width={140}
        height={29}
        priority
      />
    </div>
  );
}
