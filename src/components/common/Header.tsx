import React from 'react';
import WhiteLogo from '/public/logo/white-logo.svg';
import Image from 'next/image';
import { IoArrowBackOutline } from 'react-icons/io5';

interface ChatHeaderPropTypes {
  children: React.ReactNode;
  isChat?: boolean;
}

export default function Header({
  children,
  isChat = false,
}: ChatHeaderPropTypes) {
  return (
    <div className="w-full max-w-[600px] fixed">
      <div className=" h-14 bg-mainColor flex items-center justify-start px-[22px]">
        <Image
          src={WhiteLogo}
          alt="Talktitude white Logo"
          width={140}
          height={29}
          priority
        />
      </div>
      {isChat && (
        <div className="w-full max-w-[600px] h-14 bg-bgLightBlue flex items-center justify-start px-[22px] border border-t-0 border-lineGrey">
          <button className="flex items-center justify-center w-7 h-7">
            <IoArrowBackOutline size={30} color="#3b3b3b" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 text-textBlack text-xl font-bold">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
