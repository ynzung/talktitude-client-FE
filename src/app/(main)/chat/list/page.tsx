'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import ChatListPanel from '@/components/chat/chatList/ChatListPanel';
import Button from '@/components/ui/Button';

export default function ChatListPage() {
  const router = useRouter();

  const handleStartChat = () => {
    router.push('/chat/new');
  };

  return (
    <div className="bg-bgLightBlue">
      <Header isChat={false} />
      <ChatListPanel />
      <div className="fixed w-full max-w-[600px] bottom-0 bg-bgLightBlue p-4 z-10 border-x border-lineGray">
        <Button onClick={handleStartChat}>상담 시작하기</Button>
      </div>
    </div>
  );
}
