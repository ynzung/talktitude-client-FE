'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Item from '../../ui/Item';
import { ChatOrderListItemPropsType } from '@/types/chat';
import { postChatCreate } from '@/api/chatApi';

interface ChatOrderListPropTypes {
  items: ChatOrderListItemPropsType[];
}

function ChatOrderList({ items }: ChatOrderListPropTypes) {
  const router = useRouter();
  const empty = items.length === 0;
  const contentText = empty
    ? '주문 내역이 없습니다.'
    : '문의하고 싶은 주문을 선택해주세요.';

  const handleClickChatOrderItem = async (orderId: number) => {
    const response = await postChatCreate(orderId);
    router.push(`/chat/${response.data.sessionId}`);
  };

  return (
    <div className="w-full">
      <div
        className={`py-[16px] px-[17px] text-lg font-bold ${
          empty ? 'text-textLightGray' : 'text-mainColor'
        } bg-white`}
      >
        {contentText}
      </div>
      <div className="bg-white">
        {items.map((item, idx) => (
          <Item
            key={idx}
            mode="order"
            orderData={item}
            onClickChatItem={() => handleClickChatOrderItem(item.orderId)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatOrderList;
