'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Layout from '@/components/common/Layout';
import ChatOrderList from '@/components/chat/chatNew/ChatOrderList';
import { ChatOrderListItemPropsType } from '@/types/chat';
import { getChatOrderList } from '@/api/chatApi';

export default function ChatNewPage() {
  const [orderList, setOrderList] = useState<ChatOrderListItemPropsType[]>([]);

  useEffect(() => {
    const fetchOrderList = async () => {
      const response = await getChatOrderList();
      setOrderList(response.data);
    };
    fetchOrderList();
  }, []);

  return (
    <div className="bg-bgLightBlue">
      <Header isChat={false} />
      <Layout padding="pt-14 pb-20 border-x border-lineGray">
        <div className="mt-5">
          <ChatOrderList items={orderList} />
        </div>
        <div className="mt-20 text-center underline text-textLightGray text-sm font-bold">
          <Link href="/chat/:id">주문 말고 다른 문의가 있어요</Link>
        </div>
      </Layout>
    </div>
  );
}
