import React, { useEffect, useRef } from 'react';
import ClientBubble from './ClientBubble';
import AgentBubble from './AgentBubble';
import { EmptyState } from './EmptyState';
import { ClientMedias } from './ClientMedias';
import { ChatMessagePropsType } from '@/types/chat';

interface ChatRoomProps {
  messages: ChatMessagePropsType[];
}

export default function ChatRoom({ messages }: ChatRoomProps) {
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const emptyMessage = messages.length === 0;

  return (
    <div className="pt-28 pb-14">
      <div
        className="h-full overflow-y-auto bg-bgLightBlue px-[24px] py-2"
        style={{ height: 'calc(100dvh - 177px)' }}
      >
        {emptyMessage ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col min-h-full gap-3">
            {messages.map((message) => {
              if (message.senderType === 'CLIENT') {
                return (
                  <ClientBubble
                    key={
                      message.isTemporary ? message.tempId : message.messageId
                    }
                    message={message}
                  >
                    {message.medias && message.medias.length > 0 ? (
                      <ClientMedias medias={message.medias} />
                    ) : (
                      message.textToShow
                    )}
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
        )}
      </div>
    </div>
  );
}
