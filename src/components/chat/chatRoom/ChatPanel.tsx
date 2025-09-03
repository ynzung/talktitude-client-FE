import React from 'react';
import { MessageSquarePlus } from 'lucide-react';
import ClientBubble from './ClientBubble';
import AgentBubble from './AgentBubble';
import { ChatMessagePropsType } from '@/types/chat';
import { RefObject } from 'react';

interface ChatPanelProps {
  messages: ChatMessagePropsType[];
  chatEndRef: RefObject<HTMLDivElement | null>;
}

export default function ChatPanel({ messages, chatEndRef }: ChatPanelProps) {
  const emptyMessage = messages.length === 0;
  return (
    <div className="pt-28 pb-14">
      <div
        className="h-full overflow-y-auto bg-bgLightBlue px-[24px] py-2 border border-lr border-t-0 border-lineGray"
        style={{ height: 'calc(100dvh - 177px)' }}
      >
        {emptyMessage ? (
          <div className="flex flex-col justify-center items-center h-full gap-3">
            <MessageSquarePlus size={45} color="#aaaaaa" />
            <p className="text-textLightGray text-sm">
              궁금한 점을 메시지로 남겨주세요.
            </p>
          </div>
        ) : (
          <div className="flex flex-col min-h-full gap-3">
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
        )}
      </div>
    </div>
  );
}
