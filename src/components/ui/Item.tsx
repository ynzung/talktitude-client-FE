'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ItemPropTypes {
  data: {
    id: number;
    rastaurant_image: string;
    restaurant_name: string;
    menu_name: string;
    recent_message: string;
  };
}

export default function Item({ data }: ItemPropTypes) {
  const router = useRouter();
  const { id, rastaurant_image, restaurant_name, menu_name, recent_message } =
    data;

  const handleClick = () => {
    console.log('Clicked item with id:', id);
    router.push(`/chat/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full px-4 py-5 bg-White border-b border-LineGrey flex flex-row gap-3.5 overflow-hidden cursor-pointer last:border-b-0"
    >
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image
          src={rastaurant_image}
          alt="가게 사진"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <div className="text-TextBlack text-lg font-bold ">
          {restaurant_name}
        </div>
        <div className=" text-TextBlack text-sm font-normal">{menu_name}</div>
        <div className="text-textLightGrey text-sm font-normal line-clamp-1 ">
          {recent_message}
        </div>
      </div>
    </div>
  );
}
