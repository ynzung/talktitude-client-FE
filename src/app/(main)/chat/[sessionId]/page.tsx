'use client';

import ChatInputBar from '@/components/chat/chatRoom/ChatInputBar';
import Header from '@/components/common/Header';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { ChatMessagePropsType, ChatHeaderInfoPropsType } from '@/types/chat';
import { getChatMessage, getChatHeaderInfo } from '@/api/chatApi';
import ChatPanel from '@/components/chat/chatRoom/ChatPanel';

export default function ChatRoomPage() {
  const { sessionId } = useParams();
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessagePropsType[]>([]);
  const [headerInfo, setHeaderInfo] = useState<ChatHeaderInfoPropsType>({
    title: '',
  });

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchChatMessage = useCallback(async () => {
    const response = await getChatMessage(Number(sessionId));
    setMessages(response.data);
  }, [sessionId]);

  const fetchChatHeaderInfo = useCallback(async () => {
    const response = await getChatHeaderInfo(Number(sessionId));
    setHeaderInfo(response.data);
  }, [sessionId]);

  useEffect(() => {
    scrollToBottom();
    fetchChatMessage();
    fetchChatHeaderInfo();
  }, [fetchChatMessage, fetchChatHeaderInfo]);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      messageId: messages.length + 1,
      textToShow: message,
      originalText: message,
      showOriginal: false,
      senderType: 'CLIENT',
      createdAt: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-[100dvh]">
      <Header isChat={true}>{headerInfo.title}</Header>
      <ChatPanel messages={messages} chatEndRef={chatEndRef} />
      <div className="fixed bottom-0 w-full max-w-[600px] bg-white">
        <ChatInputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
