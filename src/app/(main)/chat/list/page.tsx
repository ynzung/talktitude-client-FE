'use client';

import ChatList from '@/components/chat/chatList/ChatList';
import Header from '@/components/common/Header';
import Layout from '@/components/common/Layout';
import React from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ongoingChats, endedChats } from '@/lib/api/mock/chat';

export default function ChatListPage() {
  const router = useRouter();

  const handleStartChat = () => {
    router.push('/chat/new');
  };

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
        <Button onClick={handleStartChat}>상담 시작하기</Button>
      </div>
    </div>
  );
}
