'use client';

import ChatBubble from '@/components/chat/chatRoom/ChatBubble';
import ChatInputBar from '@/components/chat/chatRoom/ChatInputBar';
import Header from '@/components/common/Header';
import React, { useEffect, useRef, useState } from 'react';

interface Message {
  id: number;
  is_mine: boolean;
  message: string;
}

const mockMessages: Message[] = [
  //   {
  //     id: 1,
  //     is_mine: false,
  //     message: '안녕하세요! 구공분식 강남점입니다.',
  //   },
  //   {
  //     id: 2,
  //     is_mine: true,
  //     message: '네, 안녕하세요! 주문하고 싶은데요.',
  //   },
  //   {
  //     id: 3,
  //     is_mine: true,
  //     message: '김치찌개 1개, 공기밥 2개 주문할게요.',
  //   },
  //   {
  //     id: 4,
  //     is_mine: false,
  //     message: '네, 김치찌개 1개, 공기밥 2개 주문 확인했습니다. 포장하시나요?',
  //   },
  //   {
  //     id: 5,
  //     is_mine: true,
  //     message: '네, 포장 부탁드립니다.',
  //   },
  //   {
  //     id: 6,
  //     is_mine: false,
  //     message: '네, 알겠습니다. 주문이 완료되었습니다. 맛있게 드세요!',
  //   },
  //   {
  //     id: 7,
  //     is_mine: false,
  //     message: '네, 알겠습니다. 주문이 완료되었습니다. 맛있게 드세요!',
  //   },
  //   {
  //     id: 8,
  //     is_mine: false,
  //     message: '네, 알겠습니다. 주문이 완료되었습니다. 맛있게 드세요!',
  //   },
  //   {
  //     id: 9,
  //     is_mine: false,
  //     message: '네, 알겠습니다. 주문이 완료되었습니다. 맛있게 드세요!',
  //   },
  //   {
  //     id: 10,
  //     is_mine: true,
  //     message: '네, 포장 부탁드립니다.',
  //   },
  //   {
  //     id: 11,
  //     is_mine: false,
  //     message: '네, 알겠습니다. 주문이 완료되었습니다. 맛있게 드세요!',
  //   },
  //   {
  //     id: 12,
  //     is_mine: false,
  //     message: '네, 알겠습니다. 주문이 완료되었습니다. 맛있게 드세요!',
  //   },
  //   {
  //     id: 13,
  //     is_mine: true,
  //     message: '네, 포장 부탁드립니다.',
  //   },
];

export default function ChatRoomPage() {
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(mockMessages);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      is_mine: true,
      message,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-[100dvh]">
      <Header isChat={true}>구공분식 강남점</Header>

      <div className="pt-28 pb-14">
        <div
          className="h-full overflow-y-auto bg-bgLightBlue px-[24px] py-2 border border-lr border-t-0 border-lineGrey"
          style={{ height: 'calc(100dvh - 177px)' }}
        >
          <div className="flex flex-col min-h-full">
            {messages.map((message, index) => {
              const isLastInGroup =
                index === messages.length - 1 ||
                message.is_mine !== messages[index + 1].is_mine;

              return (
                <ChatBubble
                  key={message.id}
                  is_mine={message.is_mine}
                  isLastInGroup={isLastInGroup}
                >
                  {message.message}
                </ChatBubble>
              );
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
