'use client';

import ClientBubble from '@/components/chat/chatRoom/ClientBubble';
import AgentBubble from '@/components/chat/chatRoom/AgentBubble';
import ChatInputBar from '@/components/chat/chatRoom/ChatInputBar';
import Header from '@/components/common/Header';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChatMessagePropsType } from '@/types/chat';
import { getChatMessage } from '@/api/chatApi';

export default function ChatRoomPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const resolvedParams = React.use(params);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessagePropsType[]>([]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchChatMessage = useCallback(async () => {
    const response = await getChatMessage(Number(resolvedParams.sessionId));
    setMessages(response.data);
  }, [resolvedParams.sessionId]);

  useEffect(() => {
    scrollToBottom();
    fetchChatMessage();
  }, [fetchChatMessage]);

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
      <Header isChat={true}>구공분식 강남점</Header>

      <div className="pt-28 pb-14">
        <div
          className="h-full overflow-y-auto bg-bgLightBlue px-[24px] py-2 border border-lr border-t-0 border-lineGray"
          style={{ height: 'calc(100dvh - 177px)' }}
        >
          <div className="flex flex-col min-h-full">
            {messages.map((message) => {
              if (message.senderType === 'CLIENT') {
                return (
                  <ClientBubble key={message.messageId}>
                    {message.textToShow}
                  </ClientBubble>
                );
              } else {
                return (
                  <AgentBubble key={message.messageId}>
                    {message.textToShow}
                  </AgentBubble>
                );
              }
            })}
            <div ref={chatEndRef}></div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full max-w-[600px] bg-white">
        <ChatInputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
