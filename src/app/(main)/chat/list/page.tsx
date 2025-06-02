'use client';

import ChatList from '@/components/chat/chatList/ChatList';
import Header from '@/components/common/Header';
import { Layout } from '@/components/common/Layout';
import React from 'react';
import sampleImage from '@/assets/images/sample-square.svg';
import Button from '@/components/ui/Button';

export default function ChatListPage() {
  const ongoingChats: {
    id: number;
    restaurant_image: string;
    restaurant_name: string;
    menu_name: string;
    recent_message: string;
  }[] = [
    {
      id: 1,
      restaurant_image: sampleImage,
      restaurant_name: '구공분식 강남점',
      menu_name: '야끼만두 외 4개 13,218원',
      recent_message:
        '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요? 안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
    },
    {
      id: 2,
      restaurant_image: sampleImage,
      restaurant_name: '구공분식 강남점',
      menu_name: '야끼만두 외 4개 13,218원',
      recent_message: '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
    },
  ];

  const endedChats: {
    id: number;
    restaurant_image: string;
    restaurant_name: string;
    menu_name: string;
    recent_message: string;
  }[] = [
    {
      id: 3,
      restaurant_image: sampleImage,
      restaurant_name: '구공분식 강남점',
      menu_name: '야끼만두 외 4개 13,218원',
      recent_message: '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
    },
  ];

  return (
    <div className="bg-bgLightBlue">
      <Header isChat={false} />
      <Layout padding="pt-14 pb-40 border-x border-lineGrey">
        <div className="mt-5">
          <ChatList title="상담중" items={ongoingChats} />
        </div>
        <div className="mt-5">
          <ChatList title="상담종료" items={endedChats} />
        </div>
      </Layout>
      <div className="fixed w-full max-w-[600px] bottom-0 bg-bgLightBlue p-4 z-10 border-x border-lineGrey">
        <Button onClick={() => console.log('상담 시작하기')}>
          상담 시작하기
        </Button>
      </div>
    </div>
  );
}
