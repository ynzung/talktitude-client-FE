'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Layout from '@/components/common/Layout';
import sampleImage from '@/assets/images/sample-square.svg';
import ChatOrderList from '@/components/chat/chatNew/ChatOrderList';
import Link from 'next/link';

export default function ChatNewPage() {
  const orderList: {
    id: number;
    restaurant_image: string;
    restaurant_name: string;
    menu_name: string;
    order_date: string;
  }[] = [
    {
      id: 1,
      restaurant_image: sampleImage,
      restaurant_name: '구공분식 강남점',
      menu_name: '야끼만두 외 4개 13,218원',
      order_date: '2025년 05월 16일 오후 08:56',
    },
    {
      id: 2,
      restaurant_image: sampleImage,
      restaurant_name: '구공분식 강남점',
      menu_name: '야끼만두 외 4개 13,218원',
      order_date: '2025년 05월 16일 오후 08:56',
    },
    {
      id: 3,
      restaurant_image: sampleImage,
      restaurant_name: '구공분식 강남점',
      menu_name: '야끼만두 외 4개 13,218원',
      order_date: '2025년 05월 16일 오후 08:56',
    },
    {
      id: 4,
      restaurant_image: sampleImage,
      restaurant_name: '구공분식 강남점',
      menu_name: '야끼만두 외 4개 13,218원',
      order_date: '2025년 05월 16일 오후 08:56',
    },
  ];

  return (
    <div className="bg-bgLightBlue">
      <Header isChat={false} />
      <Layout padding="pt-14 pb-20 border-x border-lineGrey">
        <div className="mt-5">
          <ChatOrderList items={orderList} />
        </div>
        <div className="mt-20 text-center underline text-textLightGrey text-sm font-bold">
          <Link href="/chat/:id">주문 말고 다른 문의가 있어요</Link>
        </div>
      </Layout>
    </div>
  );
}
