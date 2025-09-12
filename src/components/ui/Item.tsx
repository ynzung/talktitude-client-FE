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
      <div className="relative flex-shrink-0 w-20 h-20">
        <Image
          src={
            imageSrc ||
            'https://i.pinimg.com/736x/01/ae/fb/01aefbecec9bf875694c2f5b4dee0117.jpg'
          }
          alt={`${title} 이미지`}
          fill
          sizes="80px"
          unoptimized={true}
          priority
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <div className="text-TextBlack text-lg font-bold">
          {title || '주문 외 문의'}
        </div>
        <div className="text-TextBlack text-sm font-normal">
          {summary === '주문 외 문의' ? '기타 문의' : summary}
        </div>
        <div className="text-textLightGray text-sm font-normal line-clamp-1">
          {subText}
        </div>
      </div>
    </div>
  );
}
