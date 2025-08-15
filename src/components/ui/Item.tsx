'use client';

import React from 'react';
import Image from 'next/image';
import { ChatItemPropsType, ChatOrderItemPropsType } from '@/types/chat';

type ChatItemProps = ChatItemPropsType | ChatOrderItemPropsType;

export default function Item(props: ChatItemProps) {
  const { imageSrc, title, summary, subText } =
    props.mode === 'chat'
      ? {
          imageSrc: props.chatListData.storeImageUrl,
          title: props.chatListData.storeName,
          summary: props.chatListData.orderSummary,
          subText: props.chatListData.lastMessage,
        }
      : {
          imageSrc: props.orderData.restaurantImageUrl,
          title: props.orderData.restaurantName,
          summary: props.orderData.orderSummary,
          subText: props.orderData.orderDate,
        };

  return (
    <div
      onClick={props.onClickChatItem}
      className="w-full px-4 py-5 bg-White border-b border-lineGray flex flex-row gap-3.5 overflow-hidden cursor-pointer last:border-b-0 hover:bg-[#f5f5f5]"
    >
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt={`${title} 이미지`}
          width={80}
          height={80}
          priority
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <div className="text-TextBlack text-lg font-bold">{title}</div>
        <div className="text-TextBlack text-sm font-normal">{summary}</div>
        <div className="text-textLightGray text-sm font-normal line-clamp-1">
          {subText}
        </div>
      </div>
    </div>
  );
}
