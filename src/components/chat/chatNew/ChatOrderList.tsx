'use client';

import React from 'react';
import Item from '../../ui/Item';

interface ChatOrderListPropTypes {
  items: {
    id: number;
    restaurant_image: string;
    restaurant_name: string;
    menu_name: string;
    order_date: string;
  }[];
}

function ChatOrderList({ items }: ChatOrderListPropTypes) {
  return (
    <div className="w-full">
      <div className="py-[16px] px-[17px] text-lg font-bold text-mainColor bg-white">
        문의하고 싶은 주문을 선택해주세요.
      </div>
      <div className="bg-white">
        {items.map((item, idx) => (
          <Item key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ChatOrderList;
