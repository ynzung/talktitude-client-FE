'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ItemPropTypes {
  data: {
    sessionId: number;
    status: string;
    storeName: string;
    storeImageUrl: string;
    lastMessage: string;
    orderSummary: string;
  };
}

export default function Item({ data }: ItemPropTypes) {
  const router = useRouter();
  const { sessionId, storeName, storeImageUrl, lastMessage, orderSummary } =
    data;

  const handleClick = () => {
    router.push(`/chat/${sessionId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full px-4 py-5 bg-White border-b border-lineGray flex flex-row gap-3.5 overflow-hidden cursor-pointer last:border-b-0 hover:bg-[#f5f5f5]"
    >
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image
          src={storeImageUrl}
          alt="가게 사진"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <div className="text-TextBlack text-lg font-bold ">{storeName}</div>
        <div className=" text-TextBlack text-sm font-normal">
          {orderSummary}
        </div>
        <div className="text-textLightGray text-sm font-normal line-clamp-1">
          {lastMessage}
        </div>
      </div>
    </div>
  );
}
